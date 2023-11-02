<?php

/**
 * @package RaffleLeader
 */

namespace Includes\API\Callbacks;

use Includes\Base\BaseController;

class BuilderCallbacks extends BaseController{

    public function builderDashboard(){
        return require_once( "$this->plugin_path/includes/Content/builder_content.php" );
    }

}