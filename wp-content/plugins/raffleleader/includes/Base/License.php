<?php

namespace Includes\Base;

use Includes\Base\BaseController;
use Includes\API\SettingsAPI;

class License extends BaseController{

    private $settings;

    private $subpages = array();

    public function register(){
        add_action('admin_init', array($this, 'registerLicenseOption'));
    }

    public function licensePageCallback() {
        echo '<div class="wrap"><h1>Enter Your License Key</h1>';
        settings_errors();
        echo '<form method="post" action="options.php">';
        settings_fields('raffleleader_license');
        do_settings_sections('raffleleader_license');
        submit_button('Save License Key');
        echo '</form></div>';
    }

    public function registerLicenseOption() {
        register_setting(
            'raffleleader_license',
            'raffleleader_license_key',
            array($this, 'validateLicenseKey')
        );

        add_settings_section(
            'raffleleader_license_section',
            'License Settings',
            array($this, 'licenseSectionCallback'),
            'raffleleader_license'
        );

        add_settings_field(
            'raffleleader_license_key_field',
            'License Key',
            array($this, 'licenseKeyFieldCallback'),
            'raffleleader_license',
            'raffleleader_license_section'
        );
    }

    public function validateLicenseKey($input){
        return sanitize_text_field($input);
    }

    public function licenseSectionCallback() {
        echo '<p>Please enter your license key to activate all features.</p>';
    }

    public function licenseKeyFieldCallback() {
        $value = get_option('raffleleader_license_key');
        echo '<input type="text" id="raffleleader_license_key" name="raffleleader_license_key" value="' . esc_attr($value) . '">';
    }

    public function isLicenseValid(){
        return !empty(get_option('raffleleader_license_key'));
    }
}
