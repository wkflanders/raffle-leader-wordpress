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

if( file_exists( dirname(__FILE__) . '/vendor/autoload.php' ) ){
    require_once dirname( __FILE__ ) . '/vendor/autoload.php';
}

define( 'PLUGIN_PATH', plugin_dir_path( __FILE__ ) );
define( 'PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'PLUGIN_NAME', plugin_basename( __FILE__ ) );

use Includes\Base\Activate;
use Includes\Base\Deactivate;

// Activation
register_activation_hook( __FILE__, 'activate_raffleleader_plugin' );
function activate_raffleleader_plugin(){
    Activate::activate();
}

// Deactivation
register_deactivation_hook( __FILE__, 'deactivate_raffleleader_plugin' );
function deactivate_raffleleader_plugin(){
    Deactivate::deactivate();
}

if ( class_exists( 'Includes\\Init' ) ){
    Includes\Init::register_services();
}

