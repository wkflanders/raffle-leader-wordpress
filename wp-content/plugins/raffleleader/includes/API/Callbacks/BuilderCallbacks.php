<?php

/**
 * @package RaffleLeader
 */

namespace Includes\API\Callbacks;

use Includes\API\RaffleAPI;
use Includes\Base\BaseController;

class BuilderCallbacks extends BaseController{

    public $raffleAPI;

    public $raffleInstance = array();

    public function builderCreateNew(){

        $this->raffleAPI = new RaffleAPI();

        $this->raffleInstance = array(
            'name' => 'New Raffle',
            'status' => 'Draft',
        );

        $raffleID = $this->raffleAPI->addRaffle( $this->raffleInstance );

        if( $raffleID > 0 ){

            $redirectUrl = admin_url('admin.php?page=raffleleader_builder&post_id=' . $raffleID);

            echo '<script>window.location.href="' . $redirectUrl . '";</script>';
            
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

        } else {
            echo 'No post ID provided';
        }
        
        include( "$this->plugin_path/includes/Content/builder_content.php" );
    }

}