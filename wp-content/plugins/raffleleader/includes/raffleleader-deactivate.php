<?php
/**
 * @package RaffleLeader
 */

 class RaffleLeaderDeactivate{
    public static function deactivate(){
        flush_rewrite_rules();
    }
 }