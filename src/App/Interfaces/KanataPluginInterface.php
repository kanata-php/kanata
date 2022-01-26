<?php

namespace App\Interfaces;

use Psr\Container\ContainerInterface;

/**
 * Interface KanataPluginInterface
 */

interface KanataPluginInterface
{
    /**
     * Method executed when loading the plugin.
     *
     * @return void
     */
    public function start(): void;
}