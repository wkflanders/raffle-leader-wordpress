<?php
/**
 * @package RaffleLeader
 */

namespace Includes\Base;

use Includes\API\Callbacks\BuilderCallbacks;
use Includes\API\SettingsAPI;

class BuilderController extends BaseController{

    public $builderCallbacks;

    public $settings;

    public $subpages = array();

    public function register(){
        
        $this->builderCallbacks = new BuilderCallbacks();

        $this->settings = new SettingsAPI();

        $this->setSubpages();

        $this->settings->addSubPages( $this->subpages )->register();

    }

    public function setSubpages(){
        $this->subpages = array(
            array(
                'parent_slug' => $this->parent_slug,
                'page_title' => 'CreateNew',
                'menu_title' => 'Create New',
                'capability' => 'manage_options',
                'menu_slug' => 'raffleleader_create_new',
                'callback' => array( $this->builderCallbacks, 'builderHandler' ),
            )
        );
    }
}