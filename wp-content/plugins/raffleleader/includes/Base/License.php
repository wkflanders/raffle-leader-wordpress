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
            '',
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
        // $sanitized_input = sanitize_text_field($input);

        // $api_url = 'http://localhost:3000/api/check-license/' . urlencode($sanitized_input);
        // $response = wp_remote_get($api_url, array(
        //     'headers' => array('Content-Type' => 'application/json'),
        // ));

        // if(is_wp_error($response)){
        //     add_settings_error(
        //         'raffleleader_license_key',
        //         'invalid_license',
        //         'Could not validate the lciense key. Please try again.',
        //         'error'
        //     );
        //     return '';
        // }

        // $response_body = wp_remote_retrieve_body($response);
        // $data = json_decode($response_body, true);

        // if(isset($data['subscriptionStatus']) && $data['subscriptionStatus'] === 'active'){
        //     return $sanitized_input;
        // } elseif(isset($data['error'])){
        //     add_settings_error(
        //         'raffleleader_license_key',
        //         'invalid_license',
        //         'License key is invalid: ' . $data['error'],
        //         'error',
        //     );
        // return '';
        // } else {
        //     add_settings_error(
        //         'raffleleader_license_key',
        //         'invalid_license',
        //         'An unexpected error occurred during license validation',
        //         'error',
        //     );
        //     return '';
        // }
    }

    public function isLicenseValid(){
        return get_option( 'raffleleader_license_key' ) === 'beta-test';
        // $license_key = get_option('raffleleader_license_key');

        // if(!$license_key){
        //     return false;
        // }

        // $api_url = 'http://localhost:3000/api/check-license/' . urlencode($license_key);
        // $response = wp_remote_get($api_url, array(
        //     'headers' => array('Content-Type' => 'application/json'),
        // ));

        // if(is_wp_error($response)){
        //     return false;
        // }

        // $response_body = wp_remote_retrieve_body($response);
        // $data = json_decode($response_body, true);

        // return isset($data['subscriptionStatus']) && $data['subscriptionStatus'] === 'active';
    }
}
