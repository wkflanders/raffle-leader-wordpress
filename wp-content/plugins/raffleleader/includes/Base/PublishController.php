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
        add_action( 'wp_ajax_handleClassicEditorModalRaffles', array( $this, 'handleClassicEditorModalRaffles') );

        add_action( 'media_buttons', array( $this, 'addClassicEditorButton' ), 15 );
        add_action('admin_footer', array( $this, 'addClassicEditorModal' ));
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

    public function handleEmailLogin(){
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

    public function handleAdditionalEntry(){
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

    public function addClassicEditorButton( $buttons ){
        $svg_icon = '<svg style="height: 25px; width: 23px; vertical-align: bottom; margin-right: 5px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 14"><path fill="#2271b1" d="M14.5 11.4h4c1 0 1.4-.3 1.3-1.2V4.8c0-1-.5-1-1-1l-6.6-.2a3 3 0 0 1-1.8-.7l-.3-.2c-.6-.6-1.2-1-2-1H3.4c-.8 0-1.5 0-1.5 1.1V8c.1 1 .6 1.4 1.4 1.4l6.2.2c.8 0 1.2.1 2 .5l1.1.8c.7.4 1.4.5 2 .5Z"/><path fill="#2271b1" d="M22 3.3h-.2c-.7 0-1.2-.6-1.2-1.2V2h-7.9c-.7 0-1.5-.3-2-.9a4.3 4.3 0 0 0-3-1.1H1.3v.2A1.2 1.2 0 0 1 1 1c-.3.2-.6.4-1 .4v8.2h.2A1.2 1.2 0 0 1 1.4 11H9c1 0 1.9.4 2.7 1l.4.3c.5.5 1.2.7 2 .7h6.5v-.3c0-.6.6-1.2 1.2-1.1l.1-8.2Zm-3 8.4h-4.3c-.6 0-1.3-.1-2-.6l-1.2-.8c-.8-.4-1.3-.5-2-.5H3c-1 0-1.4-.4-1.5-1.5V2.5c0-1 .6-1.2 1.6-1.2h4.8c.9 0 1.6.6 2.2 1.2l.3.2c.4.4 1.3.7 1.9.7h7c.4 0 1 0 1 1v6.1c0 1-.4 1.3-1.4 1.2Z"/></svg>';
        echo '<a href="#" id="insert-raffleleader-shortcode" class="button">' . $svg_icon . ' Add Raffle</a>';
    }

    public function addClassicEditorModal(){
        $screen = get_current_screen();

        if( $screen->id != 'post' && $screen->id != 'page' ){
            return;
        }
        ?>
        <div id="raffleModal" class="raffle-modal" style="display:none;">
            <div class="raffle-modal-content">
                <span class="close">&times;</span>
                <h2>Select a Raffle</h2>
                <ul id="raffleList">
                    <!-- Raffle items will be dynamically populated here -->
                </ul>
                <button id="insertRaffle">Insert Selected Raffle</button>
            </div>
        </div>
        <?php
    }

    public function handleClassicEditorModalRaffles(){
        check_ajax_referer( 'nonce', 'security' );

        $raffles = $this->raffleAPI->getMultipleRaffles( array( 
            'active' => 'true',
            'per_page' => -1,
        ) );

        wp_send_json_success( $raffles );
    }
}