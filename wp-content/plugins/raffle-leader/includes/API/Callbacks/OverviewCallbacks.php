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
        include("$this->plugin_path/includes/Content/overview_content.php");
    }
}