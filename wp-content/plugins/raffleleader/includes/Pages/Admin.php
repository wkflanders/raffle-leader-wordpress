<?php
/**
 * @package RaffleLeader
 */

namespace Includes\Pages;

use Includes\API\SettingsAPI;
use Includes\Base\BaseController;
use Includes\API\Callbacks\AdminCallbacks;
use Includes\API\Callbacks\BuilderCallbacks;

class Admin extends BaseController{

    public $settings;

    public $icon_url;

    public $adminCallbacks;

    public $builderCallbacks;

    public $pages = array();

    public function register(){
        $this->settings = new SettingsAPI();

        $this->adminCallbacks = new AdminCallbacks();
        $this->builderCallbacks = new BuilderCallbacks();

        $this->setPages();

        $this->setSettings();
        $this->setSections();
        $this->setFields();

        $this->settings->addPages( $this->pages )->withSubPage( 'Raffles' )->register();
    }

    public function setPages(){
        $this->pages = array(
            array(
                'page_title' => 'Raffle Overview',
                'menu_title' => 'RaffleLeader',
                'capability' => 'manage_options',
                'menu_slug' => $this->parent_slug,
                'callback' => array(),
                'icon_url' => $this->icon_url,
                'position' => 67,
                'id' => 10252326
            )
        );
    }

    public function setSettings(){
        $args = array(
            array(
                'option_group' => 'raffleleader_options_group',
                'option_name' => 'license_key',
                'callback' => array( $this->adminCallbacks, 'raffleleaderOptionsGroup' )
            ),
        );

        $this->settings->setSettings( $args );
    }

    public function setSections(){
        $args = array(
            array(
                'id' => 'raffleleader_license_key',
                'title' => 'License Key',
                'callback' => array( $this->adminCallbacks, 'raffleleaderLicenseSection' ),
                'page' => 'raffleleader_plugin'
            ),
            array(
                'id' => 'raffleleader_general_settings',
                'title' => 'General Settings',
                'callback' => array( $this->adminCallbacks, 'raffleleaderSettingsSection' ),
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
                'callback' => array( $this->adminCallbacks, 'raffleleaderLicenseKey' ),
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
                'callback' => array( $this->adminCallbacks, 'raffleleaderSettings' ),
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