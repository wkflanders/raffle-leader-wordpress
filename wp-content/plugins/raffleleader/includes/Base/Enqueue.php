<?php
/**
 * @package RaffleLeader
 */

namespace Includes\Base;

use Includes\Base\BaseController;

class Enqueue extends BaseController{

    public function load(){
        add_action( 'admin_enqueue_scripts', array( $this, 'enqueue' ) );
    }

    public function enqueue(){
        wp_enqueue_style( 'raffleleader_settings_style', $this->plugin_url . '/assets/settings_style.css' );
        wp_enqueue_script( 'raffleleader_settings_script', $this->plugin_url . '/assets/settings_script.js' );             
    }
}