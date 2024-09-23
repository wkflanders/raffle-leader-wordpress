<?php
/**
 * @package RaffleLeader
 */

namespace Includes\API;

class ContestantsAPI {

    public function addContestant( array $contestantData ){
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_contestants';

        if( !is_array( $contestantData ) || empty( $contestantData ) ){
            return -3;
        }

        $keys = array_keys( $contestantData );
        if ( empty( $keys ) || !is_string( $keys[0] ) ){
            return -4;
        }

        $wpdb->insert($tableName, $contestantData);
        return $wpdb->insert_id;
    }

    public function getContestant( $contestantID ){
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_contestants';

        $query = $wpdb->prepare( "SELECT * FROM $tableName WHERE contestant_id = %d", $contestantID );
        // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared
        return $wpdb->get_row( $query, ARRAY_A );
    }

    public function getMultipleContestants($raffleID, $args = array()) {
        global $wpdb;
        $contestantsTable = $wpdb->prefix . 'raffleleader_contestants';
        $entriesTable = $wpdb->prefix . 'raffleleader_entries';
    
        $defaults = array(
            'per_page' => 10,
            'page_number' => 1,
            'order' => 'ASC',
            'orderby' => 'contestant_id',
            'search_term' => '',
        );
    
        $args = wp_parse_args($args, $defaults);
        $offset = ($args['page_number'] - 1) * $args['per_page'];
    
        // Validate the orderby and order values
        $valid_orderby_columns = ['contestant_id', 'name', 'email']; // Add valid columns as needed
        $orderby = in_array($args['orderby'], $valid_orderby_columns) ? $args['orderby'] : 'contestant_id';
        $order = strtoupper($args['order']) === 'DESC' ? 'DESC' : 'ASC';
    
        // Prepare the base query
        $query = "
            SELECT c.*, COUNT(e.entry_id) AS entries_count
            FROM $contestantsTable c
            LEFT JOIN $entriesTable e ON c.contestant_id = e.contestant_id
            WHERE e.raffle_id = %d AND c.deleted_at IS NULL
            GROUP BY c.contestant_id
            ORDER BY c.$orderby $order
        ";
    
        // Add LIMIT clause only if per_page is greater than 0
        if ($args['per_page'] > 0) {
            $query .= $wpdb->prepare(" LIMIT %d, %d", $offset, $args['per_page']);
        }
        
        // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared
        $query = $wpdb->prepare($query, $raffleID);
    
        // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared
        $results = $wpdb->get_results($query, ARRAY_A);
    
        return $results;
    }

    public function getContestantsForRaffleView($raffleID, $args = array()) {
        global $wpdb;
        $contestantsTable = $wpdb->prefix . 'raffleleader_contestants';
        $entriesTable = $wpdb->prefix . 'raffleleader_entries';
    
        $defaults = array(
            'per_page' => 10,
            'page_number' => 1,
            'order' => 'DESC',
            'orderby' => 'created_at',
            'search_term' => '',
        );
    
        $args = wp_parse_args($args, $defaults);
        $offset = ($args['page_number'] - 1) * $args['per_page'];
    
        $valid_orderby_columns = ['contestant_id', 'email', 'created_at'];
        $orderby = in_array($args['orderby'], $valid_orderby_columns) ? $args['orderby'] : 'created_at';
        $order = strtoupper($args['order']) === 'DESC' ? 'DESC' : 'ASC';
    
        $query = "
            SELECT c.*, COUNT(e.entry_id) AS entries_count, MAX(e.entry_date) AS latest_entry_date
            FROM $contestantsTable c
            LEFT JOIN $entriesTable e ON c.contestant_id = e.contestant_id
            WHERE e.raffle_id = %d AND c.deleted_at IS NULL
        ";

        if (!empty($args['search_term'])) {
            $query .= $wpdb->prepare(" AND c.email LIKE %s", '%' . $wpdb->esc_like($args['search_term']) . '%');
        }

        $query .= "
            GROUP BY c.contestant_id
            ORDER BY $orderby $order
            LIMIT %d, %d
        ";

        // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared
        $query = $wpdb->prepare($query, $raffleID, $offset, $args['per_page']);
        // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared
        return $wpdb->get_results($query, ARRAY_A);
    }

    public function getTotalContestantsCount($raffleID, $search_term = '') {
        global $wpdb;
        $contestantsTable = $wpdb->prefix . 'raffleleader_contestants';
        $entriesTable = $wpdb->prefix . 'raffleleader_entries';
    
        $query = "
            SELECT COUNT(DISTINCT c.contestant_id)
            FROM $contestantsTable c
            JOIN $entriesTable e ON c.contestant_id = e.contestant_id
            WHERE e.raffle_id = %d AND c.deleted_at IS NULL
        ";

        if (!empty($search_term)) {
            // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared
            $query .= $wpdb->prepare(" AND c.email LIKE %s", '%' . $wpdb->esc_like($search_term) . '%');
        }
        // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared    
        return $wpdb->get_var($wpdb->prepare($query, $raffleID));
    }
    public function getContestantByEmail( $email ) {
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_contestants';

        $query = $wpdb->prepare( "SELECT * FROM $tableName WHERE email = %s AND deleted_at IS NULL LIMIT 1", $email );
        // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared
        $result = $wpdb->get_row ($query, ARRAY_A );
    
        return $result;
    }

    public function updateContestant( $contestantID, $contestantData ){
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_contestants';

        $wpdb->update( $tableName, $contestantData, array( 'contestant_id' => $contestantData ) );

        return $this->getContestant( $contestantID );
    }

    public function deleteContestant( $contestantID ){
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_contestants';

        return $wpdb->delete( $tableName, array( 'raffle_id' => $contestantID ) );
    }

}