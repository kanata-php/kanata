<?php

/**
 * System Autoloader for Modules.
 * 
 * Here we will load Plugins.
 * 
 * Roadmap:
 * 1. Autoload plugins dependencies, so we don't need a subdirectory for composer dependencies
 *    separated from the main composer of the whole project.
 * 2. Selectively load plugins, so we don't need to remove from the plugins directory to deactivate a plugin.
 */

use App\Services\PluginLoader;
use Dotenv\Dotenv;

global $container;

// Load env.
$dotenv = Dotenv::createImmutable(base_path());
$dotenv->load();

// Load Plugins.
$pluginLoader = new PluginLoader($container);
$pluginLoader->load();
unset($pluginLoader); // clear some memory.
