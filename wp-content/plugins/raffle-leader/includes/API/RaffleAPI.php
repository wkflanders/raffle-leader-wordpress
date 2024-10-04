<?php
/**
 * @package RaffleLeader
 */

namespace Includes\API;

class RaffleAPI
{

    public function register()
    {
        // Need to cleanup the architecture on this and entries/contestants API
        add_action('admin_init', array($this, 'handleRaffleActions'));
    }

    public function addRaffle(array $raffleData)
    {
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_raffles';

        if (!is_array($raffleData) || empty($raffleData)) {
            error_log("addRaffle: Invalid raffle data");
            return -1;
        }

        $keys = array_keys($raffleData);
        if (empty($keys) || !is_string($keys[0])) {
            error_log("addRaffle: Invalid raffle data structure");
            return -2;
        }

        // Ensure created_at is set
        if (!isset($raffleData['created_at'])) {
            $raffleData['created_at'] = current_time('mysql');
        }

        // Ensure status is set
        if (!isset($raffleData['status'])) {
            $raffleData['status'] = 'Draft';
        }

        $result = $wpdb->insert($tableName, $raffleData);

        if ($result === false) {
            error_log("addRaffle: Failed to insert raffle. MySQL error: " . $wpdb->last_error);
            return -3;
        }

        return $wpdb->insert_id;
    }

    public function getRaffle($raffleID)
    {
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_raffles';
        // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
        $query = $wpdb->prepare("SELECT * FROM $tableName WHERE raffle_id = %d", $raffleID);
        // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared
        return $wpdb->get_row($query, ARRAY_A);
    }

    public function getMultipleRaffles($args = array())
    {
        global $wpdb;
        $rafflesTable = $wpdb->prefix . 'raffleleader_raffles';
        $contestantsTable = $wpdb->prefix . 'raffleleader_contestants';
        $entriesTable = $wpdb->prefix . 'raffleleader_entries';

        $defaults = array(
            'active' => false,
            'per_page' => 10,
            'page_number' => 1,
            'order' => 'DESC',
            'orderby' => 'raffle_id',
            'only_deleted' => false,
        );

        $args = wp_parse_args($args, $defaults);
        $query = "SELECT r.*, 
                (SELECT COUNT(DISTINCT e.contestant_id) FROM $entriesTable e WHERE e.raffle_id = r.raffle_id) as contestants,
                (SELECT COUNT(*) FROM $entriesTable e WHERE e.raffle_id = r.raffle_id) as entries
                FROM $rafflesTable r
                WHERE 1=1";

        if ($args['only_deleted']) {
            $query .= " AND deleted_at IS NOT NULL";
        } else {
            $query .= " AND deleted_at IS NULL";
        }

        if ($args['active']) {
            $current_date = current_time('mysql');
            $query .= $wpdb->prepare(" AND end_date >= %s", $current_date);
        }

        $allowed_orderby = array('raffle_id', 'start_date', 'end_date', 'created_at');
        if (in_array($args['orderby'], $allowed_orderby)) {
            $query .= " ORDER BY " . esc_sql($args['orderby']) . " " . esc_sql($args['order']);
        }

        if ($args['per_page'] != -1) {
            $offset = ($args['page_number'] - 1) * $args['per_page'];
            $query .= $wpdb->prepare(" LIMIT %d, %d", $offset, $args['per_page']);
        }
        // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared
        $results = $wpdb->get_results($query, ARRAY_A);

        return $results;
    }

    public function duplicateRaffle($raffleId)
    {
        global $wpdb;

        // Debug log
        error_log("Attempting to duplicate raffle with ID: " . $raffleId);

        // Fetch the raffle to be duplicated
        $raffle = $this->getRaffle($raffleId);

        if (!$raffle) {
            error_log("Failed to fetch raffle with ID: " . $raffleId);
            return false;
        }

        // Remove the raffle_id to create a new entry
        unset($raffle['raffle_id']);

        // Modify the name to indicate it's a copy
        $raffle['name'] = $raffle['name'] . ' (Copy)';

        // Use addRaffle to create the new raffle
        $new_raffle_id = $this->addRaffle($raffle);

        if ($new_raffle_id <= 0) {
            error_log("Failed to insert duplicated raffle. Error code: " . $new_raffle_id);
            return false;
        }

        error_log("Successfully duplicated raffle. New raffle ID: " . $new_raffle_id);

        return $new_raffle_id;
    }

    public function deletePermanently($raffleID)
    {
        // Right now, contestants are never deleted to ensure no issues entering new raffles however might change this in the future
        global $wpdb;
        $rafflesTable = $wpdb->prefix . 'raffleleader_raffles';
        $entriesTable = $wpdb->prefix . 'raffleleader_entries';

        // Start transaction
        $wpdb->query('START TRANSACTION');

        try {
            // Delete the raffle permanently
            $result = $wpdb->delete($rafflesTable, array('raffle_id' => $raffleID));
            if ($result === false) {
                throw new \Exception("Failed to delete raffle");
            }

            // Delete entries associated with this raffle
            $wpdb->delete($entriesTable, array('raffle_id' => $raffleID));

            $wpdb->query('COMMIT');
            return true;
        } catch (\Exception $e) {
            $wpdb->query('ROLLBACK');
            error_log("Error in deletePermanently: " . $e->getMessage());
            return false;
        }
    }

    public function restoreRaffle($raffleID)
    {
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_raffles';

        return $wpdb->update(
            $tableName,
            array(
                'deleted_at' => null,
                'status' => 'Draft',
            ),
            array('raffle_id' => $raffleID)
        );
    }

    public function updateRaffle($raffleID, $raffleData)
    {
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_raffles';

        $wpdb->update($tableName, $raffleData, array('raffle_id' => $raffleID));

        return $this->getRaffle($raffleID);
    }

    public function deleteRaffle($raffleID)
    {
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_raffles';
        $currentTime = current_time('mysql');

        return $wpdb->update(
            $tableName,
            array(
                'deleted_at' => $currentTime,
                'status' => 'Trashed',
            ),
            array('raffle_id' => $raffleID),
        );
    }

    public function handleRaffleActions()
    {
        if (isset($_GET['action'])) {
            if ($_GET['action'] === 'raffle_delete' && isset($_GET['raffle_id']) && check_admin_referer('delete_raffle_action', 'delete_raffle_nonce')) {
                $raffleID = intval($_GET['raffle_id']);
                $this->deleteRaffle($raffleID);
                wp_redirect(admin_url('admin.php?page=raffleleader_plugin'));
            }
        }
    }
}