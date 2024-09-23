<?php
/**
 * @package RaffleLeader
 */

/**
 * Plugin Name: Raffle Leader
 * Version: 1.0.0
 * Description: A leader in lead-marketing generation
 * Author: Raffle Leader Team
 * Author URI: https://raffleleader.com
 */

defined( 'ABSPATH' ) or die( "Hey, you can't be here!" );

define( 'RAFFLELEADER_VERSION', '1.0.0' );

// Require once the Composer Autoload
if( file_exists( dirname(__FILE__) . '/vendor/autoload.php' ) ){
    require_once dirname( __FILE__ ) . '/vendor/autoload.php';
}

function create_raffleleader_tables(){
    global $wpdb;
    $charset_collate = $wpdb->get_charset_collate();

    $raffleTableSQL = "CREATE TABLE {$wpdb->prefix}raffleleader_raffles (
        raffle_id INT AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        content TEXT NULL,
        start_date DATETIME NULL,
        end_date DATETIME NULL,
        timezone VARCHAR(255) NULL,
        status VARCHAR(255) NOT NULL,
        template_id VARCHAR(255) NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        deleted_at TIMESTAMP NULL,
        PRIMARY KEY (raffle_id)
    ) $charset_collate;";

    $raffleContestantsTableSQL = "CREATE TABLE {$wpdb->prefix}raffleleader_contestants (
        contestant_id INT AUTO_INCREMENT,
        name VARCHAR(255) NULL,
        email VARCHAR(255) NOT NULL,
        ip VARCHAR(255) NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        deleted_at TIMESTAMP NULL,
        PRIMARY KEY (contestant_id)
    ) $charset_collate;";

    $raffleEntriesTableSQL = "CREATE TABLE {$wpdb->prefix}raffleleader_entries (
        entry_id INT AUTO_INCREMENT,
        raffle_id INT NOT NULL,
        contestant_id INT NOT NULL,
        referrer_id INT NULL,
        entry_type VARCHAR(255) NULL,
        entry_details VARCHAR(255) NULL,
        winner ENUM('true', 'false') DEFAULT 'false',
        rules_consented VARCHAR(255) NULL,
        email_confirmation ENUM('unconfirmed', 'confirmed')DEFAULT 'unconfirmed',
        entry_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (raffle_id) REFERENCES {$wpdb->prefix}raffleleader_raffles(raffle_id),
        FOREIGN KEY (contestant_id) REFERENCES {$wpdb->prefix}raffleleader_contestants(contestant_id),
        PRIMARY KEY (entry_id)
    ) $charset_collate;";

    require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );

    dbDelta( $raffleTableSQL );
    dbDelta( $raffleContestantsTableSQL );
    dbDelta( $raffleEntriesTableSQL );
}

// Activation
function activate_raffleleader_plugin(){
    Includes\Base\Activate::activate();
    create_raffleleader_tables();
}
register_activation_hook( __FILE__, 'activate_raffleleader_plugin' );



// Deactivation
function deactivate_raffleleader_plugin(){
    Includes\Base\Deactivate::deactivate();
}
register_deactivation_hook( __FILE__, 'deactivate_raffleleader_plugin' );



// Initialize all the core classes of the plugin
if ( class_exists( 'Includes\\Init' ) ){
    Includes\Init::register_services();
}

