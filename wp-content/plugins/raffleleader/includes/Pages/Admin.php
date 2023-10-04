<?php
/**
 * @package RaffleLeader
 */

namespace Includes\Pages;

use Includes\Base\BaseController;
use Includes\API\SettingsAPI;

class Admin extends BaseController{

    public $settings;

    public $pages = array();

    public function __construct(){
        $this-> settings = new SettingsAPI();

        $this->pages = array(
            array(
                'page_title' => 'RaffleLeader Plugin',
                'menu_title' => 'RaffleLeader',
                'capability' => 'manage_options',
                'menu_slug' => 'raffleleader_plugin',
                'callback' => function() { echo '<h1>RaffleLeader</h1>'; },
                'icon_url' => 'dashicons-store',
                'position' => 67
            )
        );
    }

    public function register(){
        $this->settings->addPages( $this->pages )->withSubPage( 'Dashboard' )->register();
    }

    public function add_admin_pages(){
        add_menu_page( 'RaffleLeader Plugin', 'RaffleLeader', 'manage_options', 'raffleleader_plugin', array( $this, 'admin_index' ), 'dashicons-store', 67 );
    }

    public function admin_index(){
        require_once $this->plugin_path . 'templates/admin.php';
    }
}