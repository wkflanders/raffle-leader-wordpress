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

    public function getRaffleEntries( $raffleID, $args = array() ){
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_entries';
    
        $defaults = array(
            'per_page' => 10,
            'page_number' => 1,
            'order' => 'ASC',
            'orderby' => 'entry_date',  // Specify a default column to order by
        );
    
        $args = wp_parse_args( $args, $defaults );
        $offset = ( $args['page_number'] - 1 ) * $args['per_page'];
    
        // Validate the orderby and order values
        $valid_orderby_columns = ['entry_date', 'entry_id']; // Add valid columns as needed
        $orderby = in_array($args['orderby'], $valid_orderby_columns) ? $args['orderby'] : 'entry_date';
        $order = strtoupper($args['order']) === 'DESC' ? 'DESC' : 'ASC';
    
        // Ensure limit is non-negative
        $offset = max(0, $offset);
        $per_page = max(1, intval($args['per_page']));
    
        // Updated query without the 'deleted_at' condition
        $query = $wpdb->prepare(
            "SELECT * FROM $tableName WHERE raffle_id = %d ORDER BY $orderby $order LIMIT %d, %d",
            $raffleID, $offset, $per_page
        );
    
        return $wpdb->get_results( $query, ARRAY_A );
    }
    

    public function getRandomEntry($raffleID) {
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_entries';
    
        // Reset the winner column for all entries in this raffle
        $wpdb->update(
            $tableName,
            ['winner' => ''],
            ['raffle_id' => $raffleID]
        );
    
        // Select a random entry
        $query = $wpdb->prepare(
            "SELECT * FROM $tableName WHERE raffle_id = %d ORDER BY RAND() LIMIT 1",
            $raffleID
        );
        $selectedEntry = $wpdb->get_row($query, ARRAY_A);
    
        if ($selectedEntry) {
            // Update the winner column for the selected entry
            $wpdb->update(
                $tableName,
                ['winner' => '1'], // Mark this entry as the winner
                ['entry_id' => $selectedEntry['entry_id']]
            );
        }
    
        return $selectedEntry;
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
