<?php
/**
 * @package RaffleLeader
 */

namespace Includes\Base;
use Includes\API\RaffleAPI;

class PublishController extends BaseController{

    public $raffleAPI;

    public function register(){
        $this->raffleAPI = new RaffleAPI();

        add_shortcode( 'raffleleader', array( $this, 'shortcodeHandler' ) );
        
        add_action('wp_ajax_loadRaffleData', array($this, 'loadRaffleData'));
        add_action('wp_ajax_nopriv_loadRaffleData', array($this, 'loadRaffleData'));
    }

    public function shortcodeHandler( $atts ){
        
        $atts = shortcode_atts( array(
            'id' => '',
        ), $atts, 'raffleleader' );

        $raffle_id = intval( $atts['id'] );

        if( $raffle_id ){
            $output = '<div id="raffleleader-raffle-container" data-raffle-id="' . esc_attr($raffle_id) . '" style="display: flex; justify-content: center;"></div>';
            return $output;
        } else {
            $output = '<div id="raffleleader-raffle-container">Raffle could not be fetched</div>';
            return $output;
        }
    }

    public function loadRaffleData(){
        if ( !isset( $_GET['security'] ) || !wp_verify_nonce( $_GET['security'], 'nonce' ) ) {
            wp_send_json_error( 'Nonce verification failed', 403 );
        }

        $raffle_id = isset( $_GET['raffle_id'] ) ? intval( $_GET['raffle_id'] ) : 0;

        if( $raffle_id ){
            $raffleInstance = $this->raffleAPI->getRaffle( $raffle_id );

            $preview_content = !is_null( $raffleInstance['content'] ) ? stripslashes( $raffleInstance['content'] ) : '';
            $start_date = !is_null( $raffleInstance['start_date'] ) ? $raffleInstance['start_date'] : '';
            $end_date = !is_null( $raffleInstance['end_date'] ) ? $raffleInstance['end_date'] : '';
            $timezone = !is_null( $raffleInstance['timezone'] ) ? $raffleInstance['timezone'] : '';
            
            $data = array(
                'content' => $preview_content,
                'startDate' => $start_date,
                'endDate' => $end_date,
                'timezone' => $timezone,
            );

            wp_send_json( $data );
        } else {
            wp_send_json_error( 'Raffle ID not provided.' );
        }

        wp_die();
    }
}