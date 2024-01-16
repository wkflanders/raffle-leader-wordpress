<?php
/**
 * @package RaffleLeader
 */

namespace Includes\Base;

use Includes\Base\BaseController;

class Enqueue extends BaseController{

    public function loadRaffleOverview(){
        add_action( 'admin_enqueue_scripts', array( $this, 'enqueueRaffleOverview' ) );
    }

    public function loadSettings(){
        add_action( 'admin_enqueue_scripts', array( $this, 'enqueueSettings' ) );
    }

    public function loadBuilder(){
        add_action( 'admin_enqueue_scripts', array( $this, 'enqueueBuilder' ) );
    }

    public function loadCreateNew(){
        // Dummy callback
        return;
    }

    public function loadInfo(){
        add_action( 'admin_enqueue_scripts', array( $this, 'enqueueInfo' ) );
    }

    public function enqueueSettings(){
        wp_enqueue_style( 'raffleleader_settings_style', $this->plugin_url . '/assets/css/settings_style.css', array(), rand(111, 9999) );
        wp_enqueue_script( 'raffleleader_settings_script', $this->plugin_url . '/assets/js/settings_script.js', array(), rand(111, 9999) );             
    }

    public function enqueueBuilder(){
        wp_enqueue_style( 'raffleleader_wpadmin_cloak_style', $this->plugin_url . '/assets/css/wpadmin_cloak.css', array(), rand(111, 9999) );
        wp_enqueue_style( 'raffleleader_builder_navbar_style', $this->plugin_url . '/assets/css/builder_nav_style.css', array(), rand(111, 9999) );
        wp_enqueue_style( 'raffleleader_templates_style', $this->plugin_url . '/assets/css/templates_style.css', array(), rand(111, 9999) );
        wp_enqueue_style( 'raffleleader_settings_wrapper_style', $this->plugin_url . '/assets/css/setup_settings_wrapper_style.css', array(), rand(111, 9999) );
        wp_enqueue_style( 'raffleleader_details_dropdown_style', $this->plugin_url . '/assets/css/details_dropdown_style.css', array(), rand(111, 9999) );
        wp_enqueue_style( 'raffleleader_preview_default_style', $this->plugin_url . '/assets/css/preview_default_style.css', array(), rand(111, 9999) );
        wp_enqueue_style( 'raffleleader_layout_style', $this->plugin_url . '/assets/css/layout_style.css', array(), rand(111, 9999) );

        wp_enqueue_script( 'raffleleader_builder_drag_script', $this->plugin_url . '/assets/js/builder_drag_script.js', array(), rand(111, 9999) );

        wp_enqueue_script( 'raffleleader_builder_navbar_script', $this->plugin_url . '/assets/js/builder_nav_script.js', array(), rand(111, 9999) );
        
        wp_enqueue_script( 'raffleleader_panel_select_script', $this->plugin_url . '/assets/js/panel_select_script.js', array(), rand(111, 9999) );
        
        wp_enqueue_script( 'raffleleader_layout_drag_script', $this->plugin_url . '/assets/js/layout_drag_script.js', array(), rand(111, 9999) );

        wp_enqueue_script( 'raffleleader_preview_select_script', $this->plugin_url . '/assets/js/preview_select_script.js', array(), rand(111, 9999) );

        wp_enqueue_script( 'raffleleader_preview_reposition_script', $this->plugin_url . '/assets/js/preview_reposition_script.js', array(), rand(111, 9999) );
        
        wp_enqueue_script( 'raffleleader_preview_zoom_script', $this->plugin_url . '/assets/js/preview_zoom_script.js', array(), rand(111, 9999) );

        wp_enqueue_script( 'raffleleader_customize_slide_script', $this->plugin_url . '/assets/js/customize_slide_script.js', array(), rand(111, 9999) );

        wp_enqueue_script( 'raffleleader_template_select_script', $this->plugin_url . '/assets/js/template_select_script.js', array(), rand(111, 9999) );
        wp_localize_script( 'raffleleader_template_select_script', 'raffleleader_template_select_object', array( 
            'ajax_url' => admin_url( 'admin-ajax.php' ),
            'security' => wp_create_nonce( 'nonce' ),
         ) );

    }

    public function enqueueRaffleOverview(){
        wp_enqueue_style( 'raffleleader_overview_table_style', $this->plugin_url . '/assets/css/overview_table_style.css', array(), rand(111, 9999) );
    }

    public function enqueueInfo(){
        echo "";
    }

}