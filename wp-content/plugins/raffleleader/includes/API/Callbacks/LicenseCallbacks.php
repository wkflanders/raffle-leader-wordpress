<?php

namespace Includes\API\Callbacks;
use Includes\Base\BaseController;

class LicenseCallbacks extends BaseController{

    public function licensePageCallback() {
        return require_once( "$this->plugin_path/includes/Content/license_content.php" );
    }

    public function licenseInfoPageCallback() {
        return require_once( "$this->plugin_path/includes/Content/license_info_content.php" );
    }

    public function licenseSectionCallback() {
        return require_once( "$this->plugin_path/includes/Content/license_section_content.php" );
    }

    public function licenseKeyFieldCallback() {
        return require_once( "$this->plugin_path/includes/Content/license_field_content.php" );
    }

}



