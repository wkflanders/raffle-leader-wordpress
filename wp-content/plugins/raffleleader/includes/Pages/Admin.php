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

    public $subpages = array();

    public function register(){
        $this->settings = new SettingsAPI();

        $this->adminCallbacks = new AdminCallbacks();
        $this->builderCallbacks = new BuilderCallbacks();

        $this->setPages();

        $this->icon_url = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIgogICAgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+CiAgICA8cGF0aCBmaWxsPSJibGFjayIKICAgICAgICBkPSJNODYwIDU2MDggYzAgLTEzMiAtNTIgLTI1MiAtMTQ5IC0zNDggLTk4IC05NiAtMjIzIC0xNTAgLTM0OCAtMTUwCmwtNTMgMCAwIC00MjggYzAgLTIzNiAzIC0xMDAzIDcgLTE3MDQgbDYgLTEyNzYgODYgLTQgYzE2NiAtOSAyOTQgLTgzIDM5MQotMjIzIDUxIC03NSA3MyAtMTQ3IDc4IC0yNjIgbDQgLTEwMiAxNjgyIC00IGMxNjcwIC0zIDE2ODIgLTMgMTc5MSAtMjUgMzM3Ci02NSA1NzYgLTE3OCA4NjUgLTQwOSA4MCAtNjMgMTcxIC0xMzMgMjAyIC0xNTQgODMgLTU3IDIxOSAtMTIzIDMyMyAtMTU4IDE5MgotNjMgMTM3IC02MSAxNjkyIC02MSBsMTQxMyAwIDAgODMgYzAgMTQ4IDUyIDI2OSAxNTcgMzY3IDk4IDkyIDIxMyAxNDAgMzM3CjE0MCBsNTYgMCAwIDE2OTkgMCAxNjk5IC04NyA0IGMtNTIgMyAtMTExIDEzIC0xNDUgMjUgLTE5MCA2OSAtMzI4IDI2NCAtMzI4CjQ2MyBsMCA2NyAtNDY3IDYgYy0yNTYgNCAtMTAxNiA3IC0xNjg4IDcgLTEzNDQgMCAtMTI5OSAtMiAtMTQ5OSA2MiAtMTg1IDU4Ci0zMjEgMTM5IC01MTEgMzAzIC0yNDggMjEzIC01MjIgMzQ5IC04NDEgNDE3IGwtMTA5IDIzIC0xNDMyIDMgLTE0MzMgMyAwIC02M3oKbTIzNDAgLTQ5OCBjNDg1IC03IDUzMSAtOSA2MDIgLTI4IDIyMyAtNjAgMzk3IC0xNjkgNjgzIC00MjcgMTU4IC0xNDIgMjYzCi0yMTcgMzg2IC0yNzQgMTc1IC04MiAzNDEgLTEyMiA1MjMgLTEyNCA2MSAtMSA3NDYgMiAxNTIxIDYgMTUyOSA5IDE1MDEgMTAKMTYxMiAtNDQgODYgLTQyIDE0NiAtMTI1IDE3MyAtMjM5IDE3IC03MCAxNyAtNjYgNyAtMTUyNSAtNyAtOTM5IC0xMiAtMTIzOAotMjIgLTEyOTcgLTMyIC0xODQgLTExOCAtMjc4IC0yOTUgLTMyNCAtNjAgLTE1IC0xMzggLTE2IC0xMDE1IC01IC01MjIgNgotOTk3IDE0IC0xMDU1IDE2IC0yMTggMTIgLTQyNCA2MyAtNjEwIDE1MyAtNTIgMjYgLTIyMiAxMzEgLTM3OCAyMzUgLTMwMiAyMDAKLTQ2MiAyODcgLTYyNiAzNDIgLTIwNCA2OSAtMTI3IDY1IC0xNzY2IDc2IC0xNjQ2IDExIC0xNjA1IDkgLTE3MzYgNzQgLTExOAo1OCAtMTgxIDE0NSAtMjI1IDMxMCAtMTkgNzIgLTIyIDExOSAtMjkgNDgwIC01IDIyMCAtMTEgODA3IC0xNSAxMzA1IC04IDk3OQotNyA5ODcgNDUgMTA5MSAzMCA1OSA5NSAxMjUgMTUyIDE1NSA0NyAyNCAxMzkgNDkgMjA4IDU3IDQ2IDUgMTE5MyAtMyAxODYwCi0xM3oiIC8+CiAgICA8cGF0aCBmaWxsPSJibGFjayIKICAgICAgICBkPSJNMTUxMCA1MDE5IGMtMjM5IC0yMCAtMzU5IC0xMjcgLTM4OCAtMzQ1IC0xMSAtODQgNCAtMjIyMCAxNyAtMjQxOQoyNCAtMzQ4IDE0NSAtNDk2IDQzMyAtNTI0IDUxIC01IDMwNyAtMTAgNTY4IC0xMCAxMDQ3IC0yIDIxOTEgLTEzIDIyOTAgLTIyCjEyNyAtMTIgMjM1IC0zOCAzNTUgLTg2IDE1MSAtNjAgMjE1IC05NiA0OTggLTI4NSAyOTMgLTE5NSA0NDkgLTI3OSA2MDIgLTMyMwoxODYgLTUzIDE5MyAtNTQgMTI1OCAtNzAgODY0IC0xMyAxMDA3IC0xMyAxMDY2IC0xIDgzIDE3IDE1NSA1MyAxOTggOTggMzkgNDAKNzkgMTI2IDkyIDE5NSAxNSA3NyAzNCAyNTkzIDIxIDI2NzkgLTIzIDE0NSAtOTcgMjM3IC0yMjQgMjc3IC03MCAyMiAtODIgMjIKLTU3NiAyMiAtMjc4IDAgLTk1MCAtMiAtMTQ5NSAtNCBsLTk5MCAtNCAtMTAxIDI2IGMtMTI2IDMyIC0yMTMgNjUgLTMxNiAxMTkKLTEwMiA1MyAtMTYyIDk4IC0zMTggMjM4IC0yNDYgMjIzIC00NTIgMzUyIC02MzUgNDAxIC03NyAyMSAtMTEwIDIyIC03ODAgMzAKLTExMTggMTMgLTE0OTUgMTQgLTE1NzUgOHoiIC8+Cjwvc3ZnPg==";

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
                'page_title' => 'CampaignOverview',
                'menu_title' => 'RaffleLeader',
                'capability' => 'manage_options',
                'menu_slug' => 'raffleleader_plugin',
                'callback' => function() {echo '<h1>Campaign Overview</h1>'; },
                'icon_url' => 'data:image/svg+xml;base64,' . base64_encode('<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path fill="black" d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/></svg>'),
                'position' => 67,
                'id' => 10252326
            )
        );
    }

    public function setSubpages(){
        $this->subpages = array(
            array(
                'parent_slug' => 'raffleleader_plugin',
                'page_title' => 'CreateNew',
                'menu_title' => 'Create New',
                'capability' => 'manage_options',
                'menu_slug' => 'raffleleader_create_new',
                'callback' => array( $this->builderCallbacks, 'builderDashboard' ),
            ),
            array(
                'parent_slug' => 'raffleleader_plugin',
                'page_title' => 'Settings',
                'menu_title' => 'Settings',
                'capability' => 'manage_options',
                'menu_slug' => 'raffleleader_settings',
                'callback' => array( $this->adminCallbacks, 'adminDashboard' ),
            ),
            array(
                'parent_slug' => 'raffleleader_plugin',
                'page_title' => 'Info',
                'menu_title' => 'Info',
                'capability' => 'manage_options',
                'menu_slug' => 'raffleleader_info',
                'callback' => function() { echo '<h1>Info</h1>'; },
            ),
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