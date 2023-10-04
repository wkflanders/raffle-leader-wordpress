<?php

/**
 * @package RaffleLeader
 */

namespace Includes\API\Callbacks;

use Includes\Base\BaseController;

class AdminCallbacks extends BaseController{
    
    public function adminDashboard(){
        return require_once( "$this->plugin_path/templates/admin.php" );
    }

    public function raffleleaderOptionsGroup( $input ){
        return $input;
    }

    public function raffleleaderAdminSection(){
        echo 'Check this section';
    }

    public function raffleleaderTextExample(){
        $value = esc_attr( get_option( 'text_example' ) );
        echo '<input type="text" class="regular-text" name="text_example" value="' . $value . '" 
        placeholder="Write Something Here">';
    }

    public function raffleleaderFirstName(){
        $value = esc_attr( get_option( 'first_name' ) );
        echo '<input type="text" class="regular-text" name="first_name" value="' . $value . '" 
        placeholder="Write Your First Name">';
    }
}
