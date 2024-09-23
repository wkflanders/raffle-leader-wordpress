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

        // Sanitize and validate all input parameters
        $action = isset($_GET['action']) ? sanitize_text_field(wp_unslash($_GET['action'])) : '';
        $post_id = isset($_GET['post']) ? absint($_GET['post']) : 0;
        $nonce = isset($_GET['_wpnonce']) ? sanitize_text_field(wp_unslash($_GET['_wpnonce'])) : '';

        if ($action === 'trash' && $post_id > 0) {
            $this->maybe_delete_raffle($post_id, $nonce);
        }

        include("$this->plugin_path/includes/Content/overview_content.php");
    }

    private function maybe_delete_raffle($raffle_id, $nonce) {
        if (wp_verify_nonce($nonce, 'trash_post_' . $raffle_id) && current_user_can('delete_post', $raffle_id)) {
            $this->raffleAPI->deleteRaffle($raffle_id);
        }
    }
}