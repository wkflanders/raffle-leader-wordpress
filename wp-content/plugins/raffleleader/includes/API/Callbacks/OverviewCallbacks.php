<?php

/**
 * @package RaffleLeader
 */

namespace Includes\API\Callbacks;

use Includes\API\RaffleAPI;
use Includes\Base\BaseController;

class OverviewCallbacks extends BaseController {

    public $raffleAPI;

    public function overviewPostManager() {

        $this->raffleAPI = new RaffleAPI();

        if ( isset( $_GET['action'] ) && $_GET['action'] == 'trash' && isset( $_GET['post'] ) ) {
            $raffle_id = intval( $_GET['post'] );
    
            if ( isset( $_GET['_wpnonce'] ) && wp_verify_nonce( $_GET['_wpnonce'], 'trash_post_' . $raffle_id ) && current_user_can( 'delete_post', $raffle_id )) {
                $this->raffleAPI->deleteRaffle( $raffle_id );
            }
        }

        include("$this->plugin_path/includes/Content/overview_content.php");
    }
}
