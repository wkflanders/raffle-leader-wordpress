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

        if ($raffleID > 0) {
            $redirectUrl = admin_url('admin.php?page=raffleleader_builder&raffle_id=' . intval($raffleID));
            
            ?>
            <script>
                window.location.href = <?php echo wp_json_encode(esc_url_raw($redirectUrl)); ?>;
            </script>
            <?php
        } else {
            echo 'Error creating new raffle';
        }
    }

    public function overviewCreateNew(){
        $this->raffleAPI = new RaffleAPI();

        $raffleID = $this->raffleAPI->addRaffle( array( 'status' => 'Draft' ) );

        $args = array(
            'name' => 'New Raffle #' . $raffleID,
        );

        $this->raffleInstance = $this->raffleAPI->updateRaffle( $raffleID, $args );

        if( $raffleID > 0 ){

            $redirectUrl = admin_url('admin.php?page=raffleleader_builder&raffle_id=' . $raffleID);

            echo wp_json_encode(array('success' => true, 'redirect' => $redirectUrl));
            
        } else {
            echo wp_json_encode(array('success' => false, 'message' => 'Error creating new raffle'));
        }

        wp_die();
    }

    public function builderContent(){
        $raffle_id = isset( $_GET['raffle_id'] ) ? intval( $_GET['raffle_id'] ) : 0;

        if( !$raffle_id ){
            echo 'No post ID provided';
        }
        
        include( "$this->plugin_path/includes/Content/builder_content.php" );
    }

}