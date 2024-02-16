<?php
/**
 * @package RaffleLeader
 */

namespace Includes\API;

class RaffleAPI {

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

        $query = $wpdb->prepare( "SELECT * FROM $tableName WHERE raffle_id = %d", $raffleID );
        return $wpdb->get_row( $query, ARRAY_A );
    }

    public function getMultipleRaffles( $args = array() ){
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_raffles';

        $defaults = array(
            'active' => false,
            'per_page' => 10,
            'page_number' => 1,
            'order' => 'DESC',
            'orderby' => 'raffle_id'
        );

        $args = wp_parse_args( $args, $defaults );
        $query = "SELECT * FROM $tableName";

        if( $args['active'] ){
            $current_date = current_time('mysql');
            $query .= $wpdb->prepare( " WHERE start_date <= %s AND end_date >= %s", $current_date, $current_date );
        }

        $allowed_orderby = array( 'raffle_id', 'start_date', 'end_date', 'created_at' );
        if( in_array( $args['orderby'], $allowed_orderby ) ){
            $query .= " ORDER BY {$args['orderby']} {$args['order']}";
        }

        if( $args['per_page'] != -1 ){ 
            $offset = ( $args['page_number'] - 1 ) * $args['per_page'];
            $query .= $wpdb->prepare( " LIMIT %d, %d", $offset, $args['per_page'] );
        }

        $results = $wpdb->get_results( $query, ARRAY_A );

        return $results;
    }

    public function updateRaffle( $raffleID, $raffleData ){
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_raffles';

        $wpdb->update( $tableName, $raffleData, array( 'raffle_id' => $raffleID ) );

        return $this->getRaffle( $raffleID );
    }

    public function deleteRaffle( $raffleID ){
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_raffles';

        return $wpdb->delete( $tableName, array( 'raffle_id' => $raffleID ) );
    }
}