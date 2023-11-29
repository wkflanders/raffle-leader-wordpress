<?php

/**
 * @package RaffleLeader
 */

namespace Includes\API\Callbacks;

use Includes\API\RaffleAPI;
use Includes\Base\BaseController;

class BuilderCallbacks extends BaseController{

    public $raffleAPI;

    public $raffle_instance = array();

    public $builderRaffle = array();


    public function builderCreateNew(){

        $this->raffleAPI = new RaffleAPI();

        $this->raffle_instance = array(
            'post_title'    => 'New Raffle',
            'post_status'   => 'draft',
            'post_type'     => 'rl_raffle'
        );

        $this->raffleAPI->addRaffle( $this->raffle_instance );

        $new_raffle_id = $this->raffleAPI->getRaffle()['id'];

        if( $new_raffle_id && ! is_wp_error( $new_raffle_id ) ){

            echo '<script>window.location.href="' . esc_js(admin_url('admin.php?page=raffleleader_builder&post_id=' . $new_raffle_id)) . '";</script>';

        } else {
            echo 'Error creating new raffle';
        }
    }

    public function builderContent(){
        $post_id = isset( $_GET['post_id'] ) ? intval( $_GET['post_id'] ) : 0;

        if( $post_id ){
            $post = get_post( $post_id );
            if( !$post ){
                echo 'Post not found';
                return;
            }
            // Load data and initialize builder
        } else {
            echo 'No post ID provided';
        }
        
        include( "$this->plugin_path/includes/Content/builder_content.php" );
    }

}