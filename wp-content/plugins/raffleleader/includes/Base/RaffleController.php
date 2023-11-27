<?php
/**
 * @package RaffleLeader
 */

namespace Includes\Base;

class RaffleController extends BaseController{

    public $newRaffle = array();

    public function register(){
        add_action( 'init', array( $this, 'registerRaffle' ) );
    }

    public function registerRaffle(){
        
        $raffle = array(
            'labels' => array(
                'name' => 'Raffles',
                'singular_name' => 'Raffle',
            ),
            'show_ui' => true,
            'show_in_menu' => false,
        );

        register_post_type( 'raffleleader_raffle', $raffle );
    }

    public function newRaffle( array $raffle ){

        $this->newRaffle = $raffle;

        return $this->newRaffle;
    }

}