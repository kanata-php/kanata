<?php

return [

    // ------------------------------------------------------------------
    // App
    // ------------------------------------------------------------------

    'env' => env('APP_ENV'),
    'app-name' => env('APP_NAME', 'Kanata'),
    'app-url' => env('APP_URL', '127.0.0.1') . ':' . env('APP_PORT', '8080'),

    // ------------------------------------------------------------------
    // Session
    // ------------------------------------------------------------------

    'session-driver' => env('SESSION_DRIVER', 'file'),
    'session-key' => env('SESSION_PREFIX', 'eyJpZCI6IjU0'),

    // ------------------------------------------------------------------
    // Cache
    // ------------------------------------------------------------------

    'cache-directory' => env('CACHE_DIRECTORY', 'storage/cache'),
    'cache-namespace' => env('CACHE_NAMESPACE', 'app'),
    'cache-ttl' => env('CACHE_TTL', 60 * 30), // 30 minutes

];
