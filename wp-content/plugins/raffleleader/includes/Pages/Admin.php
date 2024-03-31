<?php
/**
 * @package RaffleLeader
 */

namespace Includes\Pages;

use Includes\API\SettingsAPI;
use Includes\Base\BaseController;
use Includes\API\Callbacks\AdminCallbacks;
use Includes\API\Callbacks\BuilderCallbacks;
use Includes\API\Callbacks\OverviewCallbacks;

class Admin extends BaseController{

    public $settings;

    public $adminCallbacks;

    public $builderCallbacks;

    public $overviewCallbacks;

    public $pages = array();

    public function register(){
        $this->settings = new SettingsAPI();

        $this->adminCallbacks = new AdminCallbacks();
        $this->builderCallbacks = new BuilderCallbacks();
        $this->overviewCallbacks = new OverviewCallbacks();

        $this->setPages();

        $this->setSettings();
        $this->setSections();
        $this->setFields();

        $this->settings->addPages( $this->pages )->withSubPage( 'Raffles' )->register();
    }

    public function setPages(){
        $this->pages = array(
            array(
                'page_title' => 'RaffleOverview',
                'menu_title' => 'Raffle Leader',
                'capability' => 'manage_options',
                'menu_slug' => $this->parent_slug,
                'callback' => array( $this->overviewCallbacks, 'overviewPostManager' ),
                'icon_url' => 'data:image/svg+xml;base64,' . base64_encode('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 14"><path fill="#9ca2a7" d="M14.5 11.4h4c1 0 1.4-.3 1.3-1.2V4.8c0-1-.5-1-1-1l-6.6-.2a3 3 0 0 1-1.8-.7l-.3-.2c-.6-.6-1.2-1-2-1H3.4c-.8 0-1.5 0-1.5 1.1V8c.1 1 .6 1.4 1.4 1.4l6.2.2c.8 0 1.2.1 2 .5l1.1.8c.7.4 1.4.5 2 .5Z"/><path fill="#9ca2a7" d="M22 3.3h-.2c-.7 0-1.2-.6-1.2-1.2V2h-7.9c-.7 0-1.5-.3-2-.9a4.3 4.3 0 0 0-3-1.1H1.3v.2A1.2 1.2 0 0 1 1 1c-.3.2-.6.4-1 .4v8.2h.2A1.2 1.2 0 0 1 1.4 11H9c1 0 1.9.4 2.7 1l.4.3c.5.5 1.2.7 2 .7h6.5v-.3c0-.6.6-1.2 1.2-1.1l.1-8.2Zm-3 8.4h-4.3c-.6 0-1.3-.1-2-.6l-1.2-.8c-.8-.4-1.3-.5-2-.5H3c-1 0-1.4-.4-1.5-1.5V2.5c0-1 .6-1.2 1.6-1.2h4.8c.9 0 1.6.6 2.2 1.2l.3.2c.4.4 1.3.7 1.9.7h7c.4 0 1 0 1 1v6.1c0 1-.4 1.3-1.4 1.2Z"/></svg>'),
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