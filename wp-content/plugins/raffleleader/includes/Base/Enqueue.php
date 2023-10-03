<?php
/**
 * @package RaffleLeader
 */

namespace Includes\Base;

class Enqueue extends BaseController{

    public function register(){
        add_action( 'admin_enqueu_scripts', array( $this, 'enqueue' ) );
    }

    public function enqueue(){
        wp_enqueue_style( 'raffleleader-style', $this->plugin_url . '/assets/styles.css' );
        wp_enqueue_style( 'raffleleader-script', $this->plugin_url . '/assets/index.js' );
                
    }
}