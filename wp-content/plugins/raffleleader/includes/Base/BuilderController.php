<?php
/**
 * @package RaffleLeader
 */

namespace Includes\Base;

use Includes\API\Callbacks\BuilderCallbacks;
use Includes\API\SettingsAPI;

class BuilderController extends BaseController{

    public $builderCallbacks;

    public $settings;

    public $subpages = array();

    public function register(){
        
        $this->builderCallbacks = new BuilderCallbacks();

        $this->settings = new SettingsAPI();

        $this->setSubpages();

        $this->settings->addSubPages( $this->subpages )->register();

        add_action( 'wp_ajax_saveTemplate', array( $this, 'saveTemplate' ) );
        add_action( 'wp_ajax_loadBuilderData', array( $this, 'loadBuilderData' ) );

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

    public function saveTemplate(){
        check_ajax_referer( 'nonce', 'security' );

        $post_id = isset( $_POST['post_id'] ) ? intval( $_POST['post_id'] ) : 0;
        $template_id = isset( $_POST['template_id']) ? sanitize_text_field( $_POST['template_id'] ) : '';

        if( $post_id && $template_id ){
            update_post_meta( $post_id, '_raffle_template', $template_id );
            wp_send_json_success( 'Template choice saved successfully' );
        } else {
            wp_send_json_error( 'Failed to save template choice' );
        }
    }

    public function loadBuilderData(){
        $post_id = isset( $_GET['post_id'] ) ? intval( $_GET['post_id'] ) : 0;

        if( $post_id ){
            $template = get_post_meta( $post_id, '_raffle_template', true );
            $data = array(
                'template' => $template,
            );
            wp_send_json($data);
        } else {
            wp_send_json_error('Post ID not provided');
        }
    }
}