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

if ( !class_exists( 'RaffleLeader' ) ){

    class RaffleLeader{

        function register(){
            add_action( 'admin_enqueue_scripts', array( $this, 'enqueue' ));
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
            require_once plugin_dir_path( __FILE__ ) . 'includes/raffleleader-activate.php';
            RaffleLeaderActivate::activate();
        }

    }

    if ( class_exists( 'RaffleLeader' ) ){
        $raffleLeader = new RaffleLeader;
        $raffleLeader->register();
    }

    // Activate
    register_activation_hook(  __FILE__, array( $raffleLeader, 'activate' ) );

    // Deactivate
    require_once plugin_dir_path( __FILE__ ) . 'includes/raffleleader-deactivate.php';
    register_deactivation_hook(  __FILE__, array( 'RaffleLeaderDeactivate', 'deactivate' ) );
}
