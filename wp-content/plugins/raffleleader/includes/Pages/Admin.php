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

        $this->settings->addPages( $this->pages )->withSubPage( 'Dashboard' )->addSubPages( $this->subpages )->
        register();
    }

    public function setPages(){
        $this->pages = array(
            array(
                'page_title' => 'RaffleLeader Plugin',
                'menu_title' => 'RaffleLeader',
                'capability' => 'manage_options',
                'menu_slug' => 'raffleleader_plugin',
                'callback' => array( $this->callbacks, 'adminDashboard' ),
                'icon_url' => 'dashicons-store',
                'position' => 67
            )
        );
    }

    public function setSubpages(){
        $this->subpages = array(
            array(
                'parent_slug' => 'raffleleader_plugin',
                'page_title' => 'Custom Post Types',
                'menu_title' => 'CPT',
                'capability' => 'manage_options',
                'menu_slug' => 'raffleleader_cpt',
                'callback' => function() { echo '<h1>CPT Manager</h1>'; }
            ),
            array(
                'parent_slug' => 'raffleleader_plugin',
                'page_title' => 'Custom Widgets',
                'menu_title' => 'Widgets',
                'capability' => 'manage_options',
                'menu_slug' => 'raffleleader_widgets',
                'callback' => function() { echo '<h1>Widgets Manager</h1>'; }
            )
        );
    }

    public function setSettings(){
        $args = array(
            array(
                'option_group' => 'raffleleader_options_group',
                'option_name' => 'text_example',
                'callback' => array( $this->callbacks, 'raffleleaderOptionsGroup' )
            ),
            array(
                'option_group' => 'raffleleader_options_group',
                'option_name' => 'first_name'
            )
        );

        $this->settings->setSettings( $args );
    }

    public function setSections(){
        $args = array(
            array(
                'id' => 'raffleleader_admin_index',
                'title' => 'Settings',
                'callback' => array( $this->callbacks, 'raffleleaderAdminSection' ),
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
                'id' => 'text_example',
                'title' => 'Text Example',
                'callback' => array( $this->callbacks, 'raffleleaderTextExample' ),
                'page' => 'raffleleader_plugin',
                'section' => 'raffleleader_admin_index',
                'args' => array(
                    'label_for' => 'text_example',
                    'class' => 'example-class'
                )
            ),
            array(
                'id' => 'first_name',
                'title' => 'First Name',
                'callback' => array( $this->callbacks, 'raffleleaderFirstName' ),
                'page' => 'raffleleader_plugin',
                'section' => 'raffleleader_admin_index',
                'args' => array(
                    'label_for' => 'first_name',
                    'class' => 'example-class'
                )
            )
        );

        $this->settings->setFields( $args );
    }
}