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
        // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
        $query = $wpdb->prepare( "SELECT * FROM $tableName WHERE entry_id = %d", $entryID );
        // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared
        return $wpdb->get_row( $query, ARRAY_A );
    }

    public function getRaffleEntries($raffleID, $args = array()) {
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_entries';
    
        $defaults = array(
            'per_page' => 10,
            'page_number' => 1,
            'order' => 'DESC',
            'orderby' => 'entry_date',
        );
    
        $args = wp_parse_args($args, $defaults);
        $offset = ($args['page_number'] - 1) * $args['per_page'];
    
        $valid_orderby_columns = ['entry_date', 'entry_id'];
        $orderby = in_array($args['orderby'], $valid_orderby_columns) ? $args['orderby'] : 'entry_date';
        $order = strtoupper($args['order']) === 'DESC' ? 'DESC' : 'ASC';
    
        $offset = max(0, $offset);
        $per_page = max(1, intval($args['per_page']));
        $query = $wpdb->prepare(
            // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
            "SELECT * FROM $tableName WHERE raffle_id = %d AND winner != 'true' ORDER BY $orderby $order LIMIT %d, %d",
            $raffleID, $offset, $per_page
        );
        // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared
        return $wpdb->get_results($query, ARRAY_A);
    }

    public function getTotalEntriesCount($raffleID) {
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_entries';
        
        $query = $wpdb->prepare(
            // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
            "SELECT COUNT(*) FROM $tableName WHERE raffle_id = %d",
            $raffleID
        );
        // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared
        return $wpdb->get_var($query);
    }
    

    public function getRandomEntry($raffleID) {
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_entries';
    
        $wpdb->update(
            $tableName,
            ['winner' => ''],
            ['raffle_id' => $raffleID]
        );
    
        $query = $wpdb->prepare(
            // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
            "SELECT * FROM $tableName WHERE raffle_id = %d ORDER BY RAND() LIMIT 1",
            $raffleID
        );
        // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared
        $selectedEntry = $wpdb->get_row($query, ARRAY_A);
    
        if ($selectedEntry) {
            $wpdb->update(
                $tableName,
                ['winner' => '1'], // Mark this entry as the winner
                ['entry_id' => $selectedEntry['entry_id']]
            );
        }
    
        return $selectedEntry;
    }

    public function getEntryByWinner($raffleId){
        global $wpdb;
        $entriesTable = $wpdb->prefix . 'raffleleader_entries';
        $query = $wpdb->prepare(
            // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
            "SELECT * FROM $entriesTable WHERE raffle_id = %d AND winner = 'true' LIMIT 1",
            $raffleId
        );
        // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared
        return $wpdb->get_row( $query, ARRAY_A );
    }

    public function getEntriesByContestantId( $contestantID, $raffleID ) {
        global $wpdb;
        $entriesTable = $wpdb->prefix . 'raffleleader_entries';

        $query = $wpdb->prepare(
            // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
            "SELECT * FROM $entriesTable WHERE contestant_id = %d AND raffle_id = %d",
            $contestantID, $raffleID
        );
        // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared
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
