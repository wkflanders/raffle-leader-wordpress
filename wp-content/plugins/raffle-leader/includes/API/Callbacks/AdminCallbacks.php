<?php

/**
 * @package RaffleLeader
 */

namespace Includes\API\Callbacks;

use Includes\Base\BaseController;

class AdminCallbacks extends BaseController{
    
    public function adminDashboard(){
        return require_once( "$this->plugin_path/includes/Content/admin_content.php" );
    }

    public function raffleleaderOptionsGroup( $input ){
        return $input;
    }

    public function raffleleaderSettings(){
        echo "General Settings";
    }

    public function raffleleaderSettingsSection(){
        echo "General settings for the plugin.";
    }
}
