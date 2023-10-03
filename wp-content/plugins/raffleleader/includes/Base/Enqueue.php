<?php
/**
 * @package RaffleLeader
 */

namespace Includes\Base;

class Enqueue{

    public function register(){
        add_action( 'admin_enqueu_scripts', array( $this, 'enqueue' ) );
    }

    public function enqueue(){
        wp_enqueue_style( 'raffleleader-style', PLUGIN_URL . '/assets/styles.css' );
        wp_enqueue_style( 'raffleleader-script', PLUGIN_URL . '/assets/index.js' );
                
    }
}