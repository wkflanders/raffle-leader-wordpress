<?php

/**
 * @package RaffleLeader
 */

namespace Includes\API\Callbacks;

use Includes\Base\BaseController;

class AdminCallbacks extends BaseController{
    
    public function adminDashboard(){
        return require_once( "$this->plugin_path/templates/admin_template.php" );
    }

    public function raffleleaderOptionsGroup( $input ){
        return $input;
    }

    public function raffleleaderLicenseSection(){
        echo "If you've purchased a pro version of the plugin, please enter your key here.";
    }

    public function raffleleaderLicenseKey(){
        $value = esc_attr( get_option( 'license_key' ) );
        echo '
        <div class=license_input>
            <input type="text" class="regular-text" name="license_key" value="' . $value . '" 
            placeholder="Enter License Key Here">
            <button class="license_button">Submit</button>
        </div>    ';
    }

    public function raffleleaderSettings(){
        echo "General Settings";
    }

    public function raffleleaderSettingsSection(){
        echo "General settings for the plugin.";
    }
}
