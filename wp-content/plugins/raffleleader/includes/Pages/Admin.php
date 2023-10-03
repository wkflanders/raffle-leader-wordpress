<?php
/**
 * @package RaffleLeader
 */

namespace Includes\Pages;

use Includes\Base\BaseController;

class Admin extends BaseController{

    public function register(){
        add_action( 'admin_menu', array( $this, 'add_admin_pages' ) );
    }

    public function add_admin_pages(){
        add_menu_page( 'RaffleLeader Plugin', 'RaffleLeader', 'manage_options', 'raffleleader_plugin', array( $this, 'admin_index' ), 'dashicons-store', 67 );
    }

    public function admin_index(){
        require_once $this->plugin_path . 'templates/admin.php';
    }
}