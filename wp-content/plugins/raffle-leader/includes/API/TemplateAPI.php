<?php
/**
 * @package RaffleLeader
 */

namespace Includes\API;

class TemplateAPI {

    public function addTemplate( array $templateData ){
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_templates';

        if( !is_array( $templateData ) || empty( $templateData ) ){
            return -1;
        }

        $keys = array_keys( $templateData );
        if ( empty( $keys ) || !is_string( $keys[0] ) ){
            return -2;
        }

        $wpdb->insert( $tableName, $templateData );
        return $wpdb->insert_id;
    }

    public function getTemplate( $templateID ){
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_templates';
        // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
        $query = $wpdb->prepare( "SELECT * FROM $tableName WHERE raffle_id = %d", $templateID );
        // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared
        return $wpdb->get_row( $query, ARRAY_A );
    }

    public function getAllTemplates(){
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_templates';
        // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
        $query = $wpdb->prepare("SELECT * FROM $tableName");
        // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared
        $results = $wpdb->get_results( $query, ARRAY_A );

        return $results;
    }
    public function updateTemplate( $templateID, $templateData ){
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_raffles';

        $wpdb->update( $tableName, $templateData, array( 'raffle_id' => $templateID ) );

        return $this->getTemplate( $templateID );
    }

    public function deleteTemplate( $templateID ){
        global $wpdb;
        $tableName = $wpdb->prefix . 'raffleleader_templates';

        return $wpdb->delete( $tableName, array( 'raffle_id' => $templateID ) );
    }

}