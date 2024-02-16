<?php
/**
 * @package RaffleLeader
 */

namespace Includes\API;

class RaffleAPI {

    public $raffle = array();

    public function addRaffle( array $raffleData ){
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_raffles';

        if( !is_array( $raffleData ) || empty( $raffleData ) ){
            return -1;
        }

        $keys = array_keys( $raffleData );
        if ( empty( $keys ) || !is_string( $keys[0] ) ){
            return -2;
        }

        $wpdb->insert($tableName, $raffleData);
        return $wpdb->insert_id;
    }

    public function getRaffle( $raffleID ){
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_raffles';

        $query = $wpdb->prepare( "SELECT * FROM $tableName WHERE raffleID = %d", $raffleID );
        return $wpdb->get_row( $query, ARRAY_A );
    }

    public function updateRaffle( $raffleID, $raffleData ){
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_raffles';

        return $wpdb->update( $tableName, $raffleData, array( 'raffle_id' => $raffleID ) );
    }

    public function deleteRaffle( $raffleID ){
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_raffles';

        return $wpdb->delete( $tableName, array( 'raffle_id' => $raffleID ) );
    }
}