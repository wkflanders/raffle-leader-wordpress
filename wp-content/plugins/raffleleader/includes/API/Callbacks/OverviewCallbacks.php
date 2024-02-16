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
            $post_id = intval( $_GET['post'] );
    
            // Security and capability checks
            if ( isset( $_GET['_wpnonce'] ) && wp_verify_nonce( $_GET['_wpnonce'], 'trash_post_' . $post_id ) && current_user_can( 'delete_post', $post_id )) {
                $this->raffleAPI->deleteRaffle( $post_id );
                // Optionally, you can set a flag or message here to indicate success or failure
            }
        }

        include("$this->plugin_path/includes/Content/overview_content.php");
    }
}
