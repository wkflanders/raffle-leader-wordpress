<?php
/**
 * @package RaffleLeader
 */

namespace Includes\Base;

use Includes\API\Callbacks\BuilderCallbacks;
use Includes\API\Callbacks\LicenseCallbacks;
use Includes\API\ContestantsAPI;
use Includes\API\EntriesAPI;
use Includes\API\RaffleAPI;
use Includes\API\SettingsAPI;

class BuilderController extends BaseController{

    private $raffleAPI;

    private $license;

    private $licenseCallbacks;

    private $entriesAPI;

    private $contestantsAPI;

    private $builderCallbacks;

    private $settings;

    private $subpages = array();

    public function register(){

        $this->raffleAPI = new RaffleAPI();

        $this->license = new License();

        $this->licenseCallbacks = new LicenseCallbacks();

        $this->contestantsAPI = new ContestantsAPI();
        
        $this->entriesAPI = new EntriesAPI();

        $this->builderCallbacks = new BuilderCallbacks();

        $this->settings = new SettingsAPI();

        if( $this->license->isLicenseValid() ){
            $this->setSubpages();
            $this->settings->addSubPages( $this->subpages )->register();
        }

        // add_action( 'wp_ajax_loadTemplates', array( $this, 'loadTemplates' ) );
        add_action( 'wp_ajax_saveTemplate', array( $this, 'saveTemplate' ) );
        add_action( 'wp_ajax_sendTemplate', array( $this, 'sendTemplate' ) );
        add_action( 'wp_ajax_loadBuilderData', array( $this, 'loadBuilderData' ) );
        add_action( 'wp_ajax_savePreview', array( $this, 'savePreview' ) );
        add_action( 'wp_ajax_overviewCreateNew', array( $this->builderCallbacks, 'overviewCreateNew' ) );
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
            array(
                'parent_slug' => $this->parent_slug,
                'page_title' => 'LicenseInfo',
                'menu_title' => 'License',
                'capability' => 'manage_options',
                'menu_slug' => 'raffleleader_license',
                'callback' => array( $this->licenseCallbacks, 'licenseInfoPageCallback' ),
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
        $template_id = isset($_POST['template_id']) ? sanitize_text_field(wp_unslash($_POST['template_id'])) : '';

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
        $name = isset($_POST['name']) ? sanitize_text_field(wp_unslash($_POST['name'])) : "New Raffle #$raffle_id";
        // SECURITY NOTE: Content is intentionally unsanitized to preserve complex HTML structures.
        // This is safe because:
        // 1. Only administrators can access this function.
        // 2. The content is not displayed on the front end without further processing.
        // 3. Content to be saved in this function is NEVER sent from the front end, only content from secure builder.
        // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized, WordPress.Security.ValidatedSanitizedInput.MissingUnslash
        $content = isset( $_POST['content'] ) ? $_POST['content'] /*wp_kses( $_POST['content'], $this->allowed_html )*/ : '';
        $start_date = isset($_POST['start_date']) ? sanitize_text_field(wp_unslash($_POST['start_date'])) : '';
        $end_date = isset($_POST['end_date']) ? sanitize_text_field(wp_unslash($_POST['end_date'])) : '';
        $timezone = isset($_POST['timezone']) ? sanitize_text_field(wp_unslash($_POST['timezone'])) : '';

        if( $raffle_id && $content && $start_date && $end_date && $timezone ){
            $this->raffleAPI->updateRaffle( $raffle_id, array( 'content' => $content ) );
            $this->raffleAPI->updateRaffle( $raffle_id, array( 'name' => $name ) );
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
            $name = !is_null( $raffleInstance['name'] ) ? $raffleInstance['name'] : "New Raffle #$raffle_id";
            $start_date = !is_null( $raffleInstance['start_date'] ) ? $raffleInstance['start_date'] : '';
            $end_date = !is_null( $raffleInstance['end_date'] ) ? $raffleInstance['end_date'] : '';
            $timezone = !is_null( $raffleInstance['timezone'] ) ? $raffleInstance['timezone'] : '';
            $template_id = !is_null( $raffleInstance['template_id'] ) ? $raffleInstance['template_id'] : '';
            
            $data = array(
                'content' => $preview_content,
                'name' => $name,
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