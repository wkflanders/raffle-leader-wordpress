<?php
/**
 * @package RaffleLeader
 */

namespace Includes\Base;

class Deactivate
{
    public static function deactivate()
    {
        flush_rewrite_rules();
    }
}