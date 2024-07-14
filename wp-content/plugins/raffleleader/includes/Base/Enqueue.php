<?php
/**
 * @package RaffleLeader
 */

namespace Includes\Base;

use Includes\Base\BaseController;

class Enqueue extends BaseController{

    public function register(){
        $this->loadRaffleFrontEnd();
        $this->loadWPAdminBackEnd();
    }

    public function loadLicense(){
        add_action( 'admin_enqueue_scripts', array( $this, 'enqueueLicense' ) );
    }

    public function loadLicenseInfo(){
        add_action( 'admin_enqueue_scripts', array( $this, 'enqueueLicenseInfo' ) );
    }

    public function loadRaffleFrontEnd(){
        add_action( 'wp_enqueue_scripts', array( $this, 'enqueueRaffleFrontEnd' ) );
    }

    public function loadWPAdminBackEnd(){
        add_action( 'admin_enqueue_scripts', array( $this, 'enqueueWPAdminBackEnd' ) );
    }

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

    public function enqueueRaffleFrontEnd(){
        global $post;
        if( is_a( $post, 'WP_Post' ) && has_shortcode( $post->post_content, 'raffleleader' ) ){
            wp_enqueue_script( 'raffleleader_load_raffle_script', $this->plugin_url . '/assets/js/raffle_load_script.js', array(), rand(111, 9999) );
            wp_localize_script( 'raffleleader_load_raffle_script', 'raffleleader_load_raffle_object', array( 
                'ajax_url' => admin_url( 'admin-ajax.php' ),
                'security' => wp_create_nonce( 'nonce' ),
             ) );

            wp_enqueue_script( 'raffleleader_raffle_entry_script', $this->plugin_url . '/assets/js/raffle_entry_script.js', array(), rand(111, 9999) );
            wp_localize_script( 'raffleleader_raffle_entry_script', 'raffleleader_raffle_entry_object', array( 
                'ajax_url' => admin_url( 'admin-ajax.php' ),
                'security' => wp_create_nonce( 'nonce' ),
             ) );
            
            wp_enqueue_script( 'moment-js', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js', array(), '2.29.1', true);
            wp_enqueue_script( 'moment-timezone-js', 'https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.33/moment-timezone-with-data-1970-2030.min.js', array('moment-js'), '0.5.33', true);

            wp_enqueue_style( 'raffleleader_preview_default_style', $this->plugin_url . '/assets/css/preview_default_style.css', array(), rand(111, 9999) );
            wp_enqueue_style( 'raffleleader_raffle_frontend_style', $this->plugin_url . '/assets/css/raffle_frontend_style.css', array(), rand(111, 9999) );
        }
    }

    public function enqueueWPAdminBackEnd(){
        wp_enqueue_style( 'raffleleader_classic_editor_style', $this->plugin_url . '/assets/css/classic_editor_style.css', array(), rand(111, 9999) );
        
        wp_enqueue_script( 'raffleleader_classic_editor_script', $this->plugin_url . '/assets/js/classic_editor_script.js', array(), rand(111, 9999) );
        wp_localize_script( 'raffleleader_classic_editor_script', 'raffleleader_classic_editor_script_object', array( 
            'ajax_url' => admin_url( 'admin-ajax.php' ),
            'security' => wp_create_nonce( 'nonce' ),
         ) );
    }

    public function enqueueSettings(){
        wp_enqueue_style( 'raffleleader_settings_style', $this->plugin_url . '/assets/css/settings_style.css', array(), rand(111, 9999) );
        wp_enqueue_script( 'raffleleader_settings_script', $this->plugin_url . '/assets/js/settings_script.js', array(), rand(111, 9999) );             
    }

    public function enqueueBuilder(){
        //Loading CSS libraries
        wp_enqueue_style( 'raffleleader_pickr_style','https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/themes/classic.min.css', array(), rand(111, 9999) );
        wp_enqueue_style('intro-js-css', 'https://cdn.jsdelivr.net/npm/intro.js@4.0.0/minified/introjs.min.css', array(), '4.0.0');

        wp_enqueue_style( 'raffleleader_wpadmin_cloak_style', $this->plugin_url . '/assets/css/wpadmin_cloak.css', array(), rand(111, 9999) );
        wp_enqueue_style( 'raffleleader_builder_navbar_style', $this->plugin_url . '/assets/css/builder_nav_style.css', array(), rand(111, 9999) );
        wp_enqueue_style( 'raffleleader_templates_style', $this->plugin_url . '/assets/css/templates_style.css', array(), rand(111, 9999) );
        wp_enqueue_style( 'raffleleader_settings_wrapper_style', $this->plugin_url . '/assets/css/setup_settings_wrapper_style.css', array(), rand(111, 9999) );
        wp_enqueue_style( 'raffleleader_preview_default_style', $this->plugin_url . '/assets/css/preview_default_style.css', array(), rand(111, 9999) );
        wp_enqueue_style( 'raffleleader_layout_style', $this->plugin_url . '/assets/css/layout_style.css', array(), rand(111, 9999) );
        wp_enqueue_style( 'raffleleader_customize_settings_style', $this->plugin_url . '/assets/css/customize_settings_style.css', array(), rand(111, 9999) );
        wp_enqueue_style( 'raffleleader_preview_modal_style', $this->plugin_url . '/assets/css/preview_modal_style.css', array(), rand(111, 9999) );
        wp_enqueue_style( 'raffleleader_setup_general_settings_style', $this->plugin_url . '/assets/css/setup_general_settings_style.css', array(), rand(111, 9999) );
        wp_enqueue_style( 'raffleleader_publish_style', $this->plugin_url . '/assets/css/publish_style.css', array(), rand(111, 9999) );
        wp_enqueue_style( 'raffleleader_tutorial_style', $this->plugin_url . '/assets/css/tutorial_style.css', array(), rand(111, 9999) );

        // Loading JS libraries
        wp_enqueue_script( 'raffleleader_pickr_script', 'https://cdn.jsdelivr.net/npm/@simonwep/pickr@1.8.0/dist/pickr.min.js', array(), rand(111, 9999) );
        wp_enqueue_script( 'moment-js', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js', array(), '2.29.1', true);
        wp_enqueue_script( 'moment-timezone-js', 'https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.33/moment-timezone-with-data-1970-2030.min.js', array('moment-js'), '0.5.33', true);
        wp_enqueue_script('intro-js', 'https://cdn.jsdelivr.net/npm/intro.js@4.0.0/minified/intro.min.js', array(), '4.0.0', true);

        wp_enqueue_script( 'raffleleader_builder_drag_script', $this->plugin_url . '/assets/js/builder_drag_script.js', array(), rand(111, 9999) );

        wp_enqueue_script( 'raffleleader_builder_navbar_script', $this->plugin_url . '/assets/js/builder_nav_script.js', array(), rand(111, 9999) );
                
        wp_enqueue_script( 'raffleleader_preview_select_script', $this->plugin_url . '/assets/js/preview_select_script.js', array(), rand(111, 9999), true );

        wp_enqueue_script( 'raffleleader_layout_drag_script', $this->plugin_url . '/assets/js/layout_drag_script.js', array( 'raffleleader_preview_select_script' ), rand(111, 9999), true );

        wp_enqueue_script( 'raffleleader_preview_reposition_script', $this->plugin_url . '/assets/js/preview_reposition_script.js', array(), rand(111, 9999), true );
        
        wp_enqueue_script( 'raffleleader_preview_load_script', $this->plugin_url . '/assets/js/preview_load_script.js', array(), rand(111, 9999) );

        wp_enqueue_script( 'raffleleader_customize_settings_script', $this->plugin_url . '/assets/js/customize_settings_script.js', array( 'raffleleader_preview_reposition_script', 'raffleleader_preview_select_script' ), rand(111, 9999), true );

        wp_enqueue_script( 'raffleleader_preview_size_script', $this->plugin_url . '/assets/js/preview_size_script.js', array(), rand(111, 9999) );

        wp_enqueue_script( 'raffleleader_setup_general_settings_script', $this->plugin_url . '/assets/js/setup_general_settings_script.js', array(), rand(111, 9999) );
        
        wp_enqueue_script( 'raffleleader_preview_layers_script', $this->plugin_url . '/assets/js/preview_layers_script.js', array(), rand(111, 9999) );

        wp_enqueue_script( 'raffleleader_hotkey_script', $this->plugin_url . '/assets/js/hotkey_script.js', array(), rand(111, 9999) );

        wp_enqueue_script( 'raffleleader_preview_save_script', $this->plugin_url . '/assets/js/preview_save_script.js', array(), rand(111, 9999) );
        wp_localize_script( 'raffleleader_preview_save_script', 'raffleleader_preview_save_object', array( 
            'ajax_url' => admin_url( 'admin-ajax.php' ),
            'security' => wp_create_nonce( 'nonce' ),
         ) );

        wp_enqueue_script( 'raffleleader_template_select_script', $this->plugin_url . '/assets/js/template_select_script.js', array(), rand(111, 9999) );
        wp_localize_script( 'raffleleader_template_select_script', 'raffleleader_template_select_object', array( 
            'ajax_url' => admin_url( 'admin-ajax.php' ),
            'security' => wp_create_nonce( 'nonce' ),
         ) );

        wp_enqueue_script( 'raffleleader_publish_script', $this->plugin_url . '/assets/js/publish_script.js', array(), rand(111, 9999) );
        wp_localize_script( 'raffleleader_publish_script', 'raffleleader_publish_object', array(
            'newPostUrl' => admin_url( 'post-new.php' ),
            'editPostUrl' => admin_url( 'edit.php' ),
        ) );
            
        wp_enqueue_media();
    }

    public function enqueueRaffleOverview(){
        wp_enqueue_script( 'raffleleader_overview_script', $this->plugin_url . '/assets/js/overview_script.js', array(), rand(111, 9999) );
        wp_localize_script( 'raffleleader_overview_script', 'raffleleader_overview_object', array(
            'ajax_url' => admin_url( 'admin-ajax.php' ),
            'security' => wp_create_nonce( 'nonce' ),
        ) );

        wp_enqueue_style( 'raffleleader_overview_table_style', $this->plugin_url . '/assets/css/overview_table_style.css', array(), rand(111, 9999) );
    }

    public function enqueueLicenseInfo(){
        wp_enqueue_style( 'raffleleader_license_info_style', $this->plugin_url . '/assets/css/license_info_style.css', array(), rand(111, 9999) );
    }

    public function enqueueLicense(){
        wp_enqueue_style( 'raffleleader_license_style', $this->plugin_url . '/assets/css/license_style.css', array(), rand(111, 9999) );
    }

    public function enqueueInfo(){
        echo "";
    }

}