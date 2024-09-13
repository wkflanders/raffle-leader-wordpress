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

        $query = $wpdb->prepare( "SELECT * FROM $tableName WHERE raffle_id = %d", $contestantID );
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
    
        $query = $wpdb->prepare($query, $raffleID);
    
        $results = $wpdb->get_results($query, ARRAY_A);
    
        return $results;
    }
    public function getContestantByEmail( $email ) {
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_contestants';

        $query = $wpdb->prepare( "SELECT * FROM $tableName WHERE email = %s AND deleted_at IS NULL LIMIT 1", $email );
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