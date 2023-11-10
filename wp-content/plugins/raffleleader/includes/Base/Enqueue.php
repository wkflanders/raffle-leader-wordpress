<?php
/**
 * @package RaffleLeader
 */

namespace Includes\Base;

use Includes\Base\BaseController;

class Enqueue extends BaseController{

    public function loadCampaignOverview(){
        add_action( 'admin_enqueue_scripts', array( $this, 'enqueueCampaignOverview' ) );
    }

    public function loadSettings(){
        add_action( 'admin_enqueue_scripts', array( $this, 'enqueueSettings' ) );
    }

    public function loadCreateNew(){
        add_action( 'admin_enqueue_scripts', array( $this, 'enqueueCreateNew' ) );
    }

    public function loadInfo(){
        add_action( 'admin_enqueue_scripts', array( $this, 'enqueueInfo' ) );
    }

    public function enqueueSettings(){
        wp_enqueue_style( 'raffleleader_settings_style', $this->plugin_url . '/assets/css/settings_style.css', array(), rand(111, 9999) );
        wp_enqueue_script( 'raffleleader_settings_script', $this->plugin_url . '/assets/js/settings_script.js', array(), rand(111, 9999) );             
    }

    public function enqueueCreateNew(){
        wp_enqueue_style( 'raffleleader_wpadmin_cloak_style', $this->plugin_url . '/assets/css/wpadmin_cloak.css', array(), rand(111, 9999) );
        wp_enqueue_style( 'raffleleader_builder_navbar_style', $this->plugin_url . '/assets/css/builder_nav_style.css', array(), rand(111, 9999) );
        wp_enqueue_style( 'raffleleader_templates_style', $this->plugin_url . '/assets/css/templates_style.css', array(), rand(111, 9999) );
        wp_enqueue_script( 'raffleleader_builder_navbar_script', $this->plugin_url . '/assets/js/builder_nav_script.js', array(), rand(111, 9999) );
        wp_enqueue_script( 'raffleleader_panel_select_script', $this->plugin_url . '/assets/js/panel_select_script.js', array(), rand(111, 9999) );
    }

    public function enqueueCampaignOverview(){
        echo "";
    }

    public function enqueueInfo(){
        echo "";
    }

}