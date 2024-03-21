<?php
/**
 * @package RaffleLeader
 */

namespace Includes\Base;
use Includes\API\ContestantsAPI;
use Includes\API\EntriesAPI;
use Includes\API\RaffleAPI;

class PublishController extends BaseController{

    private $raffleAPI;

    private $entriesAPI;

    private $contestantsAPI;

    public function register(){
        $this->raffleAPI = new RaffleAPI();

        $this->entriesAPI = new EntriesAPI();

        $this->contestantsAPI = new ContestantsAPI();

        add_shortcode( 'raffleleader', array( $this, 'shortcodeHandler' ) );
        
        add_action( 'wp_ajax_loadRaffleData', array( $this, 'loadRaffleData' ) );
        add_action( 'wp_ajax_nopriv_loadRaffleData', array( $this, 'loadRaffleData' ) );
        add_action( 'wp_ajax_handleEmailLogin', array( $this, 'handleEmailLogin') );
        add_action( 'wp_ajax_nopriv_handleEmailLogin', array( $this, 'handleEmailLogin') );
        add_action( 'wp_ajax_handleAdditionalEntry', array( $this, 'handleAdditionalEntry') );
        add_action( 'wp_ajax_nopriv_handleAdditionalEntry', array( $this, 'handleAdditionalEntry') );
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

    function handleEmailLogin(){
        check_ajax_referer( 'nonce', 'security' );

        if ( isset( $_POST['contestant_email'] ) ) {
            $email = sanitize_email( $_POST['contestant_email'] );
    
            $contestant = $this->contestantsAPI->getContestantByEmail( $email );
    
            if ( $contestant ) {
                $contestant_id = $contestant['contestant_id'];
            } else {
                $ip = $_SERVER['REMOTE_ADDR'];
                $contestantData = array(
                    'email' => $email,
                    'ip' => $ip,
                );
    
                $contestant_id = $this->contestantsAPI->addContestant( $contestantData );
            }
    
            if ( isset( $_POST['raffle_id'] ) && $contestant_id ) {
                $raffle_id = intval($_POST['raffle_id']);
                $entryData = array(
                    'raffle_id' => $raffle_id,
                    'contestant_id' => $contestant_id,
                    'entry_type' => 'Email',
                );
    
                $this->entriesAPI->addEntry( $entryData );

                wp_send_json_success( 'Entry successfully counted' );
            } else {
                wp_send_json_error( 'Entry failed to be counted' );
            }
        } else {
            wp_send_json_error( 'Invalid request.' );
        }
    }

    function handleAdditionalEntry(){
        check_ajax_referer( 'nonce', 'security' );

        if( isset( $_POST['contestant_email'], $_POST['raffle_id'], $_POST['entry_type'] ) ) {
            $email = sanitize_email( $_POST['contestant_email'] );
            $raffle_id = intval( $_POST['raffle_id'] );
            $entry_type = sanitize_text_field( $_POST['entry_type'] );

            $contestant = $this->contestantsAPI->getContestantByEmail( $email );
    
            if ($contestant) {
                $contestant_id = $contestant['contestant_id'];
            } else {
                $ip = $_SERVER['REMOTE_ADDR'];
                $contestantData = array(
                    'email' => $email,
                    'ip' => $ip,
                );
    
                $contestant_id = $this->contestantsAPI->addContestant( $contestantData );
            }

            $entryData = array(
                'raffle_id' => $raffle_id,
                'contestant_id' => $contestant_id,
                'entry_type' => $entry_type,
            );

            $this->entriesAPI->addEntry( $entryData );

            wp_send_json_success( 'Entry successfully counted' );
        } else {
            wp_send_json_error( 'Invalid request.' );
        }
    }
}