<?php
/**
 * @package RaffleLeader
 */

/**
 * Plugin Name: RaffleLeader
 * Version: 1.0.0
 * Description: A leader in market lead generation
 */

defined( 'ABSPATH' ) or die( "Hey, you can't be here!" );



// Require once the Composer Autoload
if( file_exists( dirname(__FILE__) . '/vendor/autoload.php' ) ){
    require_once dirname( __FILE__ ) . '/vendor/autoload.php';
}



// Activation
function activate_raffleleader_plugin(){
    Includes\Base\Activate::activate();
    define( 'WP_DEBUG', true );
    define ( 'WP_DEBUG_DISPLAY', true );
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

