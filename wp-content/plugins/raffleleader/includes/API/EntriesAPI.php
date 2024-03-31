<?php

/**
 * @package RaffleLeader
 */

namespace Includes\API;

class EntriesAPI {

    public function addEntry( array $entryData ){
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_entries';

        if( !is_array( $entryData ) || empty( $entryData ) ){
            return -1;
        }

        $keys = array_keys( $entryData );
        if ( empty( $keys ) || !is_string( $keys[0] ) ){
            return -2;
        }

        $wpdb->insert( $tableName, $entryData );
        return $wpdb->insert_id;
    }

    public function getEntry( $entryID ){
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_entries';

        $query = $wpdb->prepare( "SELECT * FROM $tableName WHERE entry_id = %d", $entryID );
        return $wpdb->get_row( $query, ARRAY_A );
    }

    public function getRaffleEntries( $raffleID, $args  = array() ){
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_entries';

        $defaults = array(
            'per_page' => 10,
            'page_number' => 1,
            'order' => 'ASC',
            'orderby' => 'entry_date',
        );

        $args = wp_parse_args( $args, $defaults );
        $query = "SELECT * FROM $tableName WHERE deleted_at IS NULL";

        $offset = ( $args['page'] - 1 ) * $args['per_page'];
        $table_name = $wpdb->prefix . 'raffleleader_entries';

        $results = $wpdb->get_results( $wpdb->prepare(
            "SELECT * FROM $table_name WHERE raffle_id = %d ORDER BY {$args['order_by']} {$args['order']} LIMIT %d, %d",
            $raffleID, $offset, $args['per_page']
        ), ARRAY_A) ;

        return $results;
    }

    public function getEntriesByContestantId( $contestantID, $raffleID ) {
        global $wpdb;
        $entriesTable = $wpdb->prefix . 'raffleleader_entries';

        $query = $wpdb->prepare(
            "SELECT * FROM $entriesTable WHERE contestant_id = %d AND raffle_id = %d",
            $contestantID, $raffleID
        );

        $results = $wpdb->get_results($query, ARRAY_A);

        return $results;
    }

    public function updateEntry( $entryID, $entryData ){
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_entries';

        $wpdb->update( $tableName, $entryData, array( 'entry_id' => $entryID ) );

        return $this->getEntry( $entryID );
    }

    public function deleteEntry( $entryID ){
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_entries';

        return $wpdb->delete( $tableName, array( 'entry_id' => $entryID ) );
    }

}
