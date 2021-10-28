<?php

namespace App\Interfaces;

use Psr\Container\ContainerInterface;

/**
 * Interface FlightZonePluginInterface
 */

interface FlightZonePluginInterface
{
    /**
     * Method executed when loading the plugin.
     *
     * @return void
     */
    public function start(): void;
}