<?php
/**
 * @package RaffleLeader
 */

namespace Includes\API;
use Includes\Base\Enqueue;

class RaffleAPI{

    public $raffle = array();

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

        register_post_type( 'rl_raffle', $raffle );
    }

    public function addRaffle( array $args ){

        if ( $args['post_type'] != 'rl_raffle' ){
            return null;
        }

        $raffle_id = wp_insert_post( $args );

        $this->raffle = array(
            'raffle' => $args,
            'id' => $raffle_id,
        );

        return $this;

    }

    public function getRaffle(){
        if( !empty( $this->raffle ) ){
            return $this->raffle;
        } else {
            return null;
        }
    }
}