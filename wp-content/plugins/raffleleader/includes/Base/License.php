<?php

namespace Includes\Base;

use Includes\Base\BaseController;
use Includes\API\Callbacks\LicenseCallbacks;


class License extends BaseController{
    
    public $licenseCallbacks;

    public function register(){
        $this->licenseCallbacks = new LicenseCallbacks();

        add_action( 'admin_init', array( $this, 'registerLicenseOption' ) );
    }

    public function registerLicenseOption() {
        register_setting(
            'raffleleader_license',
            'raffleleader_license_key',
            array( $this, 'validateLicenseKey' )
        );

        add_settings_section(
            'raffleleader_license_section',
            'License Settings',
            array( $this->licenseCallbacks, 'licenseSectionCallback' ),
            'raffleleader_license'
        );

        add_settings_field(
            'raffleleader_license_key_field',
            'License Key',
            array( $this->licenseCallbacks, 'licenseKeyFieldCallback' ),
            'raffleleader_license',
            'raffleleader_license_section'
        );
    }

    public function validateLicenseKey($input){
        return sanitize_text_field( $input );
    }

    public function isLicenseValid(){
        return !empty( get_option( 'raffleleader_license_key' ) );
    }
}
