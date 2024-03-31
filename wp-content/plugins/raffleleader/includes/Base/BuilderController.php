<?php
/**
 * @package RaffleLeader
 */

namespace Includes\Base;

use Includes\API\Callbacks\BuilderCallbacks;
use Includes\API\ContestantsAPI;
use Includes\API\EntriesAPI;
use Includes\API\RaffleAPI;
use Includes\API\SettingsAPI;

class BuilderController extends BaseController{

    private $raffleAPI;

    private $entriesAPI;

    private $contestantsAPI;

    private $builderCallbacks;

    private $settings;

    private $subpages = array();

    public function register(){

        $this->raffleAPI = new RaffleAPI();

        $this->contestantsAPI = new ContestantsAPI();
        
        $this->entriesAPI = new EntriesAPI();

        $this->builderCallbacks = new BuilderCallbacks();

        $this->settings = new SettingsAPI();

        $this->setSubpages();

        $this->settings->addSubPages( $this->subpages )->register();

        // add_action( 'wp_ajax_loadTemplates', array( $this, 'loadTemplates' ) );
        add_action( 'wp_ajax_saveTemplate', array( $this, 'saveTemplate' ) );
        add_action( 'wp_ajax_sendTemplate', array( $this, 'sendTemplate' ) );
        add_action( 'wp_ajax_loadBuilderData', array( $this, 'loadBuilderData' ) );
        add_action( 'wp_ajax_savePreview', array( $this, 'savePreview' ) );
    }

    public function setSubpages(){

        $this->subpages = array(
            array(
                'parent_slug' => $this->parent_slug,
                'page_title' => 'CreateNew',
                'menu_title' => 'Create New',
                'capability' => 'manage_options',
                'menu_slug' => 'raffleleader_create_new',
                'callback' => array( $this->builderCallbacks, 'builderCreateNew' ),
            ),
            array(
                'parent_slug' => null,
                'page_title' => 'Builder',
                'menu_title' => null,
                'capability' => 'manage_options',
                'menu_slug' => 'raffleleader_builder',
                'callback' => array( $this->builderCallbacks, 'builderContent' ),
            ),
        );
    }

    // public function loadTemplates(){
    //     check_ajax_referer( 'nonce', 'security' );

    //     $templatesList = $this->templateAPI->getAllTemplates();

    //     $data = array(
    //         'templates' => $templatesList,
    //     );
        
    //     wp_send_json($data);

    //     wp_die();
    // }

    public function saveTemplate(){
        check_ajax_referer( 'nonce', 'security' );

        $raffle_id = isset( $_POST['raffle_id'] ) ? intval( $_POST['raffle_id'] ) : 0;
        $template_id = isset( $_POST['template_id']) ? sanitize_text_field( $_POST['template_id'] ) : '';

        if( $raffle_id && $template_id ){
            $this->raffleAPI->updateRaffle( $raffle_id, array( 'template_id' => $template_id ) );
            wp_send_json_success( 'Template choice saved successfully' );
        } else {
            wp_send_json_error( 'Failed to save template choice' );
        }
        
        wp_die();
    }

    public function savePreview(){
        check_ajax_referer( 'nonce', 'security' );

        $raffle_id = isset( $_POST['raffle_id'] ) ? intval( $_POST['raffle_id'] ) : 0;
        $content = isset( $_POST['content'] ) ? $_POST['content'] /*wp_kses( $_POST['content'], $this->allowed_html )*/ : '';
        $start_date = isset( $_POST['start_date'] ) ? $_POST['start_date'] : '';
        $end_date = isset( $_POST['end_date'] ) ? $_POST['end_date'] : '';
        $timezone = isset( $_POST['timezone'] ) ? $_POST['timezone'] : '';

        if( $raffle_id && $content && $start_date && $end_date && $timezone ){
            $this->raffleAPI->updateRaffle( $raffle_id, array( 'content' => $content ) );
            $this->raffleAPI->updateRaffle( $raffle_id, array( 'start_date' => $start_date ) );
            $this->raffleAPI->updateRaffle( $raffle_id, array( 'end_date' => $end_date ) );
            $this->raffleAPI->updateRaffle( $raffle_id, array( 'timezone' => $timezone ) );

            wp_send_json_success( 'Raffle saved successfully' );
        } else {
            wp_send_json_error( 'Failed to save raffle' );
        }

        wp_die();
    }

    public function loadBuilderData(){
        $raffle_id = isset( $_GET['raffle_id'] ) ? intval( $_GET['raffle_id'] ) : 0;

        if( $raffle_id ){
            $raffleInstance = $this->raffleAPI->getRaffle( $raffle_id );

            $preview_content = !is_null( $raffleInstance['content'] ) ? stripslashes( $raffleInstance['content'] ) : '';
            $start_date = !is_null( $raffleInstance['start_date'] ) ? $raffleInstance['start_date'] : '';
            $end_date = !is_null( $raffleInstance['end_date'] ) ? $raffleInstance['end_date'] : '';
            $timezone = !is_null( $raffleInstance['timezone'] ) ? $raffleInstance['timezone'] : '';
            $template_id = !is_null( $raffleInstance['template_id'] ) ? $raffleInstance['template_id'] : '';
            
            $data = array(
                'content' => $preview_content,
                'startDate' => $start_date,
                'endDate' => $end_date,
                'timezone' => $timezone,
                'template_id' => $template_id,
            );
            wp_send_json( $data );
        } else {
            wp_send_json_error( 'Raffle ID not provided' );
        }

        wp_die();
    }
}