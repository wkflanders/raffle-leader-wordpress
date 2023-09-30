<?php

/**
 * Plugin Name: RaffleLeader
 * Version: 1.0.0
 * Description: A leader in market lead generation
 */

if (!defined('ABSPATH')) {
    die();
}

if (!class_exists('RaffleLeader')) {
    class RaffleLeader{

        public function __construct(){
            define('PLUGIN_PATH', plugin_dir_path(__FILE__));
            require_once(PLUGIN_PATH . '/vendor/autoload.php');
        }

        public function initialize(){
            include_once PLUGIN_PATH . '/includes/utils.php';
            include_once PLUGIN_PATH . '/includes/settings/settings.php';
        }

    }

    $raffleLeader = new RaffleLeader;

    $raffleLeader->initialize();
}
