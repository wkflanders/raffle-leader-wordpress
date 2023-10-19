<?php
/**
 * @package RaffleLeader
 */

namespace Includes\Pages;

use Includes\API\SettingsAPI;
use Includes\Base\BaseController;
use Includes\API\Callbacks\AdminCallbacks;

class Admin extends BaseController{

    public $settings;

    public $callbacks;

    public $pages = array();

    public $subpages = array();

    public function register(){
        $this->settings = new SettingsAPI();

        $this->callbacks = new AdminCallbacks();

        $this->setPages();

        $this->setSubpages();

        $this->setSettings();
        $this->setSections();
        $this->setFields();

        $this->settings->addPages( $this->pages )->withSubPage( 'Campaigns' )->addSubPages( $this->subpages )->
        register();
    }

    public function setPages(){
        $this->pages = array(
            array(
                'page_title' => 'Campaign Overview',
                'menu_title' => 'RaffleLeader',
                'capability' => 'manage_options',
                'menu_slug' => 'raffleleader_plugin',
                'callback' => function() {echo '<h1>Campaign Overview</h1>'; },
                'icon_url' => 'dashicons-store',
                'position' => 67
            )
        );
    }

    public function setSubpages(){
        $this->subpages = array(
            array(
                'parent_slug' => 'raffleleader_plugin',
                'page_title' => 'Create New',
                'menu_title' => 'Create New',
                'capability' => 'manage_options',
                'menu_slug' => 'raffleleader_create_new',
                'callback' => function() { echo '<h1>Create New</h1>'; }
            ),
            array(
                'parent_slug' => 'raffleleader_plugin',
                'page_title' => 'Settings',
                'menu_title' => 'Settings',
                'capability' => 'manage_options',
                'menu_slug' => 'raffleleader_settings',
                'callback' => array( $this->callbacks, 'adminDashboard' )
            ),
            array(
                'parent_slug' => 'raffleleader_plugin',
                'page_title' => 'Info',
                'menu_title' => 'Info',
                'capability' => 'manage_options',
                'menu_slug' => 'raffleleader_info',
                'callback' => function() { echo '<h1>Info</h1>'; }
            ),
        );
    }

    public function setSettings(){
        $args = array(
            array(
                'option_group' => 'raffleleader_options_group',
                'option_name' => 'license_key',
                'callback' => array( $this->callbacks, 'raffleleaderOptionsGroup' )
            ),
        );

        $this->settings->setSettings( $args );
    }

    public function setSections(){
        $args = array(
            array(
                'id' => 'raffleleader_license_key',
                'title' => 'License Key',
                'callback' => array( $this->callbacks, 'raffleleaderLicenseSection' ),
                'page' => 'raffleleader_plugin'
            ),
            array(
                'id' => 'raffleleader_general_settings',
                'title' => 'General Settings',
                'callback' => array( $this->callbacks, 'raffleleaderSettingsSection' ),
                'page' => 'raffleleader_plugin'
            )
        );

        $this->settings->setSections( $args );
    }

    public function setFields(){
        // Field id must be the same as the value of the options_group
        // Field page should be same as section page
        $args = array(
            array(
                'id' => 'license_key',
                'title' => 'License Key',
                'callback' => array( $this->callbacks, 'raffleleaderLicenseKey' ),
                'page' => 'raffleleader_plugin',
                'section' => 'raffleleader_license_key',
                'args' => array(
                    'label_for' => 'license_key',
                    'class' => 'license_class'
                )
            ),
            array(
                'id' => 'settings',
                'title' => 'General Settings',
                'callback' => array( $this->callbacks, 'raffleleaderSettings' ),
                'page' => 'raffleleader_plugin',
                'section' => 'raffleleader_general_settings',
                'args' => array(
                    'label_for' => 'settings',
                    'class' => 'settings_class'
                )
            ),
        );

        $this->settings->setFields( $args );
    }
}