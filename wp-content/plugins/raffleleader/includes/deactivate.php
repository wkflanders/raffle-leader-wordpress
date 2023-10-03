<?php
/**
 * @package RaffleLeader
 */

 namespace Includes;

 class Deactivate{
    public static function deactivate(){
        flush_rewrite_rules();
    }
 }