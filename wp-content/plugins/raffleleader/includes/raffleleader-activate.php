<?php
/**
 * @package RaffleLeader
 */

 class RaffleLeaderActivate{
    public static function activate(){
        flush_rewrite_rules();
    }
 }