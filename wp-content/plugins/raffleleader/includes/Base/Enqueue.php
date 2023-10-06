<?php
/**
 * @package RaffleLeader
 */

namespace Includes\Base;

use Includes\Base\BaseController;

class Enqueue extends BaseController{

    public function register(){
        add_action( 'admin_enqueue_scripts', array( $this, 'enqueue' ) );
    }

    public function enqueue(){
        wp_enqueue_style( 'raffleleader-style', $this->plugin_url . '/assets/styles.css' );
        wp_enqueue_script( 'raffleleader-script', $this->plugin_url . '/assets/scripts.js' );
                
    }
}