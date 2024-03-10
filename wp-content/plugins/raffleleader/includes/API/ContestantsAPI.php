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

    public function getMultipleContestants( $raffleID, $args = array() ) {
        global $wpdb;
        $contestantsTable = $wpdb->prefix . 'raffleleader_contestants';
        $entriesTable = $wpdb->prefix . 'raffleleader_entries';

        $defaults = array(
            'per_page' => 10,
            'page_number' => 1,
            'order' => 'ASC',
            'orderby' => 'contestant_id',
        );
    
        $args = wp_parse_args( $args, $defaults );
        $offset = ($args['page_number'] - 1) * $args['per_page'];

        $query = $wpdb->prepare(
            "SELECT c.*, COUNT(e.entry_id) AS entries_count
             FROM $contestantsTable c
             LEFT JOIN $entriesTable e ON c.contestant_id = e.contestant_id
             WHERE e.raffle_id = %d AND c.deleted_at IS NULL
             GROUP BY c.contestant_id
             ORDER BY c.{$args['orderby']} {$args['order']}
             LIMIT %d, %d",
            $raffleID, $offset, $args['per_page']);
    
        if ( !empty( $args['search_term'] ) ) {
            $searchTerm = '%' . $wpdb->esc_like( $args['search_term'] ) . '%';
            $query .= $wpdb->prepare( " AND (name LIKE %s OR email LIKE %s )", $searchTerm, $searchTerm );
        }
    
        $results = $wpdb->get_results( $query, ARRAY_A );
    
        return $results;
    }

    public function getContestantByEmail( $email ) {
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_contestants';

        $query = $wpdb->prepare( "SELECT * FROM $tableName WHERE email = %s AND deleted_at IS NULL LIMIT 1", $email );
        $result = $wpdb->get_row ($query, ARRAY_A );
    
        return $result; // Will return null if no matching record is found
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