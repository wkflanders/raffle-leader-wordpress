<?php

namespace Includes\Base;

use Includes\Base\BaseController;
use Includes\API\Callbacks\LicenseCallbacks;
use WP_Error;

class License extends BaseController {
    
    public $licenseCallbacks;

    // Option names to store license key and status
    const LICENSE_KEY_OPTION = 'raffleleader_license_key';
    const LICENSE_STATUS_OPTION = 'raffleleader_license_status';
    const LICENSE_LAST_CHECKED_OPTION = 'raffleleader_license_last_checked';

    // Transient key for caching
    const LICENSE_TRANSIENT_KEY = 'raffleleader_license_validation';
    const LICENSE_TRANSIENT_EXPIRATION = DAY_IN_SECONDS; // 24 hours

    public function register(){
        $this->licenseCallbacks = new LicenseCallbacks();

        add_action( 'admin_init', array( $this, 'registerLicenseOption' ) );
    }

    public function registerLicenseOption() {
        register_setting(
            'raffleleader_license', // Settings group
            self::LICENSE_KEY_OPTION, // Option name
            array( $this, 'validateLicenseKey' ) // Callback
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

    /**
     * Validate the license key by making an API request.
     *
     * @param string $input The license key input by the user.
     * @return string The sanitized license key.
     */
    public function validateLicenseKey($input){
        // Sanitize the input
        $sanitized_key = sanitize_text_field( $input );

        // Log the sanitized key
        error_log( 'Validating license key: ' . $sanitized_key );

        // Perform API request to validate the license key
        $response = wp_remote_get( 'https://raffle-leader.fly.dev/api/check-license/' . urlencode( $sanitized_key ) );

        if ( is_wp_error( $response ) ) {
            // Log the error for debugging
            error_log( 'License validation API error: ' . $response->get_error_message() );

            // Handle error accordingly
            add_settings_error(
                self::LICENSE_KEY_OPTION,
                'license_error',
                'There was an error validating the license key. Please try again later.',
                'error'
            );

            // Do not update the license key if validation fails
            return get_option( self::LICENSE_KEY_OPTION );
        }

        $body = wp_remote_retrieve_body( $response );
        $code = wp_remote_retrieve_response_code( $response );

        // Log the raw API response
        error_log( 'License validation API raw response: ' . $body );

        if ( $code !== 200 ) {
            add_settings_error(
                self::LICENSE_KEY_OPTION,
                'license_invalid',
                'Invalid license key. Please enter a valid key.',
                'error'
            );

            // Update license status to invalid
            update_option( self::LICENSE_STATUS_OPTION, 'invalid' );
            error_log( 'License status updated to invalid due to response code: ' . $code );

            // Delete any existing transient since the license is invalid
            delete_transient( self::LICENSE_TRANSIENT_KEY );
            error_log( 'Transient deleted: ' . self::LICENSE_TRANSIENT_KEY );

            return get_option( self::LICENSE_KEY_OPTION );
        }

        // Handle different response formats
        $response_data = trim( strtolower( $body ) );

        // If API returns JSON, decode it
        if ( $this->is_json( $body ) ) {
            $decoded = json_decode( $body, true );
            if ( isset( $decoded['subscriptionStatus'] ) ) {
                $response_data = trim( strtolower( $decoded['subscriptionStatus'] ) );
                error_log( 'License validation API decoded subscriptionStatus: ' . $response_data );
            }
        }

        if ( $response_data === 'active' ) {
            // License is valid, update the license status
            update_option( self::LICENSE_STATUS_OPTION, 'valid' );
            error_log( 'License status updated to valid.' );

            // Set transient for caching
            set_transient( self::LICENSE_TRANSIENT_KEY, 'valid', self::LICENSE_TRANSIENT_EXPIRATION );
            error_log( 'Transient set: ' . self::LICENSE_TRANSIENT_KEY . ' = valid' );

            // Optionally, update the last checked timestamp
            update_option( self::LICENSE_LAST_CHECKED_OPTION, time() );
            error_log( 'License last checked updated.' );

            // Log the license key being saved
            error_log( 'License key saved: ' . $sanitized_key );

            return $sanitized_key;
        } else {
            // License is invalid
            add_settings_error(
                self::LICENSE_KEY_OPTION,
                'license_invalid',
                'Invalid license key. Please enter a valid key.',
                'error'
            );

            // Update license status to invalid
            update_option( self::LICENSE_STATUS_OPTION, 'invalid' );
            error_log( 'License status updated to invalid.' );

            // Delete any existing transient since the license is invalid
            delete_transient( self::LICENSE_TRANSIENT_KEY );
            error_log( 'Transient deleted: ' . self::LICENSE_TRANSIENT_KEY );

            // Log the invalid license key attempt
            error_log( 'Invalid license key attempted: ' . $sanitized_key );

            return get_option( self::LICENSE_KEY_OPTION );
        }
    }

    /**
     * Check if the current license is valid.
     *
     * This method uses caching to minimize API calls.
     *
     * @return bool True if the license is valid, false otherwise.
     */
    public function isLicenseValid(){
        // Check if the transient exists
        $cached_status = get_transient( self::LICENSE_TRANSIENT_KEY );

        if ( false !== $cached_status ) {
            // Transient exists, use the cached status
            error_log( 'Using cached license status: ' . $cached_status );
            return $cached_status === 'valid';
        }

        // Transient does not exist, perform validation
        $license_key = get_option( self::LICENSE_KEY_OPTION );

        if ( empty( $license_key ) ) {
            error_log( 'License key is empty.' );
            return false;
        }

        // Log the license key being validated
        error_log( 'Validating license key in isLicenseValid: ' . $license_key );

        // Perform API validation
        $response = wp_remote_get( 'https://raffle-leader.fly.dev/api/check-license/' . urlencode( $license_key ) );

        if ( is_wp_error( $response ) ) {
            // Log the error for debugging
            error_log( 'License validation API error during isLicenseValid: ' . $response->get_error_message() );

            // Optionally, treat as invalid or maintain previous status
            return false;
        }

        $body = wp_remote_retrieve_body( $response );
        $code = wp_remote_retrieve_response_code( $response );

        // Log the raw API response
        error_log( 'License validation API raw response in isLicenseValid: ' . $body );

        if ( $code !== 200 ) {
            // Invalid response code, treat as invalid
            update_option( self::LICENSE_STATUS_OPTION, 'invalid' );
            error_log( 'License status updated to invalid due to response code: ' . $code );

            return false;
        }

        // Handle different response formats
        $response_data = trim( strtolower( $body ) );

        // If API returns JSON, decode it
        if ( $this->is_json( $body ) ) {
            $decoded = json_decode( $body, true );
            if ( isset( $decoded['subscriptionStatus'] ) ) {
                $response_data = trim( strtolower( $decoded['subscriptionStatus'] ) );
                error_log( 'License validation API decoded subscriptionStatus in isLicenseValid: ' . $response_data );
            }
        }

        if ( $response_data === 'active' ) {
            // License is valid
            update_option( self::LICENSE_STATUS_OPTION, 'valid' );
            error_log( 'License status updated to valid in isLicenseValid.' );

            // Set transient for caching
            set_transient( self::LICENSE_TRANSIENT_KEY, 'valid', self::LICENSE_TRANSIENT_EXPIRATION );
            error_log( 'Transient set in isLicenseValid: ' . self::LICENSE_TRANSIENT_KEY . ' = valid' );

            // Update the last checked timestamp
            update_option( self::LICENSE_LAST_CHECKED_OPTION, time() );
            error_log( 'License last checked updated in isLicenseValid.' );

            return true;
        } else {
            // License is invalid
            update_option( self::LICENSE_STATUS_OPTION, 'invalid' );
            error_log( 'License status updated to invalid in isLicenseValid.' );

            // Set transient for caching
            set_transient( self::LICENSE_TRANSIENT_KEY, 'invalid', self::LICENSE_TRANSIENT_EXPIRATION );
            error_log( 'Transient set in isLicenseValid: ' . self::LICENSE_TRANSIENT_KEY . ' = invalid' );

            return false;
        }
    }

    /**
     * Helper function to check if a string is a valid JSON.
     *
     * @param string $string The string to check.
     * @return bool True if valid JSON, false otherwise.
     */
    private function is_json($string) {
        json_decode($string);
        return (json_last_error() == JSON_ERROR_NONE);
    }
}
