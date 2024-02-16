<?php
/**
 * @package RaffleLeader
 */

namespace Includes\API;

class ContestantsAPI{

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

    public function getMultipleContestants( $args = array() ){
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_contestants';

        $defaults = array(
            'per_page' => 10,
            'page_number' => 1,
            'order' => 'DESC',
            'orderby' => 'contestant_id'
        );

        $args = wp_parse_args( $args, $defaults );
        $query = "SELECT * FROM $tableName";

        $allowed_orderby = array( 'contestant_id', 'name', 'email', 'created_at' );
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