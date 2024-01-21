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

    public $allowed_html = array();

    public function register(){
        
        $this->builderCallbacks = new BuilderCallbacks();

        $this->settings = new SettingsAPI();

        $this->setSubpages();

        $this->allowed_html = array(
            'a' => array(
                'href' => true,
                'title' => true,
                'class' => true,
                'id' => true,
                'style' => true,
                'target' => true,
            ),
            'div' => array(
                'class' => true,
                'id' => true,
                'style' => true,
                'data-type' => true,
            ),
            'p' => array(
                'class' => true,
                'id' => true,
                'style' => true
            ),
            'h4' => array(
                'class' => true,
                'id' => true,
                'style' => true,
            ),
            'h2' => array(
                'class' => true,
                'id' => true,
                'style' => true,
            )
        );

        $this->settings->addSubPages( $this->subpages )->register();

        add_action( 'wp_ajax_saveTemplate', array( $this, 'saveTemplate' ) );
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
        wp_die();
    }

    public function savePreview(){
        check_ajax_referer( 'nonce', 'security' );

        $post_id = isset( $_POST['post_id'] ) ? intval( $_POST['post_id'] ) : 0;
        $content = isset( $_POST['content'] ) ? $_POST['content'] /*wp_kses( $_POST['content'], $this->allowed_html )*/ : '';

        if( $post_id && $content ){
            update_post_meta( $post_id, '_raffle_content', $content );
            wp_send_json_success( 'Preview saved successfully' );
        } else {
            wp_send_json_error( 'Failed to save preview content' );
        }
        wp_die();
    }

    public function loadBuilderData(){
        $post_id = isset( $_GET['post_id'] ) ? intval( $_GET['post_id'] ) : 0;

        if( $post_id ){
            $template = get_post_meta( $post_id, '_raffle_template', true );
            $previewContent = get_post_meta( $post_id, '_raffle_content', true );
            $data = array(
                'template' => $template,
                'content' => $previewContent,
            );
            wp_send_json($data);
        } else {
            wp_send_json_error('Post ID not provided');
        }
    }
}