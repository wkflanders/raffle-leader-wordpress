<?php

/**
 * @package RaffleLeader
 */

namespace Includes\API\Callbacks;

use Includes\API\RaffleAPI;
use Includes\Base\BaseController;

class BuilderCallbacks extends BaseController
{

    private $raffleAPI;

    private $raffleInstance;

    public function builderCreateNew()
    {

        $this->raffleAPI = new RaffleAPI();

        $raffleID = $this->raffleAPI->addRaffle(array('status' => 'Draft'));

        $args = array(
            'name' => 'New Raffle #' . $raffleID,
        );

        $this->raffleInstance = $this->raffleAPI->updateRaffle($raffleID, $args);

        if ($raffleID > 0) {
            // Create a nonce for the builder page
            $builder_nonce = wp_create_nonce('verify_raffle_id_action');

            $redirectUrl = add_query_arg(
                array(
                    'page' => 'raffleleader_builder',
                    'raffle_id' => intval($raffleID),
                    '_wpnonce' => $builder_nonce
                ),
                admin_url('admin.php')
            );

            ?>
            <script>
                window.location.href = <?php echo wp_json_encode(esc_url_raw($redirectUrl)); ?>;
            </script>
            <?php
        } else {
            echo 'Error creating new raffle';
        }
    }

    public function overviewCreateNew()
    {
        $this->raffleAPI = new RaffleAPI();

        $raffleID = $this->raffleAPI->addRaffle(array('status' => 'Draft'));

        $args = array(
            'name' => 'New Raffle #' . $raffleID,
        );

        $this->raffleInstance = $this->raffleAPI->updateRaffle($raffleID, $args);

        if ($raffleID > 0) {
            // Create a new nonce for the builder page
            $builder_nonce = wp_create_nonce('verify_raffle_id_action');

            $redirectUrl = add_query_arg(
                array(
                    'page' => 'raffleleader_builder',
                    'raffle_id' => $raffleID,
                    '_wpnonce' => $builder_nonce
                ),
                admin_url('admin.php')
            );

            echo wp_json_encode(array('success' => true, 'redirect' => $redirectUrl));
        } else {
            echo wp_json_encode(array('success' => false, 'message' => 'Error creating new raffle'));
        }

        wp_die();
    }

    public function builderContent()
    {
        if (!isset($_GET['_wpnonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_GET['_wpnonce'])), 'verify_raffle_id_action')) {
            wp_die('Security check failed', 'Security Error', array('response' => 403));
        }

        $raffle_id = isset($_GET['raffle_id']) ? intval($_GET['raffle_id']) : 0;

        if (!$raffle_id) {
            echo 'No post ID provided';
        }

        include("$this->plugin_path/includes/Content/builder_content.php");
    }

}