<?php

/**
 * @package RaffleLeader
 */

namespace Includes\API\Callbacks;

use Includes\API\RaffleAPI;
use Includes\Base\BaseController;

class BuilderCallbacks extends BaseController{

    private $raffleAPI;

    private $raffleInstance;

    public function builderCreateNew(){

        $this->raffleAPI = new RaffleAPI();

        $raffleID = $this->raffleAPI->addRaffle( array( 'status' => 'Draft' ) );

        $args = array(
            'name' => 'New Raffle #' . $raffleID,
        );

        $this->raffleInstance = $this->raffleAPI->updateRaffle( $raffleID, $args );

        if( $raffleID > 0 ){

            $redirectUrl = admin_url('admin.php?page=raffleleader_builder&raffle_id=' . $raffleID);

            echo '<script>window.location.href="' . $redirectUrl . '";</script>';
            
        } else {
            echo 'Error creating new raffle';
        }
    }

    public function builderContent(){
        $raffle_id = isset( $_GET['raffle_id'] ) ? intval( $_GET['raffle_id'] ) : 0;

        if( $raffle_id ){

            $post = get_post( $raffle_id );

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