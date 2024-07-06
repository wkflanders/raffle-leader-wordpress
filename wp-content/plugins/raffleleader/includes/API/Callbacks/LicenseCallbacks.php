<?php

namespace Includes\API\Callbacks;
use Includes\Base\BaseController;

class LicenseCallbacks extends BaseController{

    public function  licensePageCallback() {
        return require_once( "$this->plugin_path/includes/Content/license_content.php" );
    }

    public function licenseSectionCallback() {
        echo '<p>Please enter your license key to activate all features.</p>';
    }

    public function licenseKeyFieldCallback() {
        $value = get_option('raffleleader_license_key');
        echo '<input type="text" id="raffleleader_license_key" name="raffleleader_license_key" value="' . esc_attr($value) . '">';
    }

}



