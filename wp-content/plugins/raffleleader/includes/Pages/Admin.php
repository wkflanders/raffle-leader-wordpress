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

    public $subpages = array();

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

        $this->subpages = array(
            array(
                'parent_slug' => 'raffleleader_plugin',
                'page_title' => 'Custom Post Types',
                'menu_title' => 'CPT',
                'capability' => 'manage_options',
                'menu_slug' => 'raffleleader_cpt',
                'callback' => function() { echo '<h1>CPT Manager</h1>'; }
            ),
            array(
                'parent_slug' => 'raffleleader_plugin',
                'page_title' => 'Custom Widgets',
                'menu_title' => 'Widgets',
                'capability' => 'manage_options',
                'menu_slug' => 'raffleleader_widgets',
                'callback' => function() { echo '<h1>Widgets Manager</h1>'; }
            )
        );
    }

    public function register(){
        $this->settings->addPages( $this->pages )->withSubPage( 'Dashboard' )->addSubPages( $this->subpages )->register();
    }

    public function add_admin_pages(){
        add_menu_page( 'RaffleLeader Plugin', 'RaffleLeader', 'manage_options', 'raffleleader_plugin', array( $this, 'admin_index' ), 'dashicons-store', 67 );
    }

    public function admin_index(){
        require_once $this->plugin_path . 'templates/admin.php';
    }
}