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

use Includes\Activate;
use Includes\Deactivate;

if ( !class_exists( 'RaffleLeader' ) ){

    class RaffleLeader{

        public $plugin;

        function __construct(){
            $this->plugin = plugin_basename( __FILE__ );
        }

        function register(){
            add_action( 'admin_enqueue_scripts', array( $this, 'enqueue' ));

            add_action( 'admin_menu', array( $this, 'add_admin_pages' ) );
        
            add_filter( "plugin_action_links_$this->plugin", array( $this, 'settings_link' ) );
        }

        public function settings_link( $links ){
            $settings_link = '<a href="admin.php?page=raffleleader_plugin">Settings</a>';
            array_push( $links, $settings_link );
            return $links;
        }

        public function add_admin_pages(){
            add_menu_page( 'RaffleLeader Plugin', 'RaffleLeader', 'manage_options', 'raffleleader_plugin', array( $this, 'admin_index' ), 'dashicons-store', 67 );
        }

        public function admin_index(){
            require_once plugin_dir_path( __FILE__ ) . 'templates/admin.php';
        }

        protected function create_post_type(){
            add_action( 'init', array( $this, 'custom_post_type' ) );
        }

        function custom_post_type(){
            register_post_type( 'book', ['public' => true, 'label' => 'Books'] );
        }

        function enqueue(){
            // enqueue all scripts
            wp_enqueue_style( 'raffleleader-style', plugins_url( '/assets/styles.css', __FILE__ ) );
            wp_enqueue_style( 'raffleleader-script', plugins_url( '/assets/index.js', __FILE__ ) );
        }

        function activate(){
            Activate::activate();
        }

        function deactivate(){
            Deactivate::deactivate();
        }

    }

    if ( class_exists( 'RaffleLeader' ) ){
        $raffleLeader = new RaffleLeader;
        $raffleLeader->register();
    }

    // Activate
    register_activation_hook(  __FILE__, array( $raffleLeader, 'activate' ) );

    // Deactivate
    register_deactivation_hook(  __FILE__, array( $raffleLeader, 'deactivate' ) );
}
