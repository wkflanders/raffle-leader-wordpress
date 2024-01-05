<?php

/**
 * @package RaffleLeader
 */

namespace Includes\API\Callbacks;

use Includes\Base\BaseController;

class OverviewCallbacks extends BaseController {

    public function overviewPostManager() {

        if (isset($_GET['action']) && $_GET['action'] == 'trash' && isset($_GET['post'])) {
            $post_id = intval($_GET['post']);
    
            // Security and capability checks
            if (isset($_GET['_wpnonce']) && wp_verify_nonce($_GET['_wpnonce'], 'trash_post_' . $post_id) && current_user_can('delete_post', $post_id)) {
                wp_trash_post($post_id);
                // Optionally, you can set a flag or message here to indicate success or failure
            }
        }

        include("$this->plugin_path/includes/Content/overview_content.php");
    }

    public function overviewDashboard() {
        return require_once("$this->plugin_path/includes/Content/overview_content.php");
    }
}
