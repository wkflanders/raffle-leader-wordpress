<?php

/**
 * @package RaffleLeader
 */

namespace Includes\API\Callbacks;

use Includes\Base\BaseController;
use Includes\Base\RaffleController;

class BuilderCallbacks extends BaseController{

    public $raffle = array();

    public $builderRaffle = array();

    public $raffleController;

    public function builderHandler(){

        // Will need to abstract this to custom naming

        $this->raffle = array(
            'post_title' => 'New Raffle',
            'post_status' => 'draft',
            'post_type' => 'raffleleader_raffle'
        );

        $this->raffleController = new RaffleController();

        $this->builderRaffle = $this->raffleController->newRaffle( $this->raffle );

        $new_raffle_id = wp_insert_post( $this->builderRaffle );

        if( $new_raffle_id && ! is_wp_error( $new_raffle_id ) ){

            global $current_raffle_id;

            $current_raffle_id = $new_raffle_id;

            include( "$this->plugin_path/includes/Content/builder_content.php" );
            
        } else {
            echo 'Error creating new raffle';
        }
    }

    public function builderDashboard(){
            return require_once( "$this->plugin_path/includes/Content/builder_content.php" );
    }

}