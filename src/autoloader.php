<?php

/**
 * Here we load Plugins.
 */

use App\Services\PluginLoader;

// Load Plugins.
$pluginLoader = new PluginLoader(container());
$pluginLoader->load();
unset($pluginLoader); // clear some memory.

