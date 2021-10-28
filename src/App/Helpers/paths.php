<?php

/**
 * Retrieve base path of the project.
 *
 * @return string
 */
function base_path(): string
{
    return trailingslashit(str_replace('src/App/Helpers', '', __DIR__));
}

/**
 * Retrieve storage path of the project.
 *
 * @return string
 */
function storage_path(): string
{
    return trailingslashit(str_replace('src/App/Helpers', '', __DIR__)) . 'storage/';
}

/**
 * Retrieve public path of the project.
 *
 * @return string
 */
function public_path(): string
{
    return trailingslashit(str_replace('src/App/Helpers', '', __DIR__)) . 'public/';
}

/**
 * Retrieve resources path of the project.
 *
 * @return string
 */
function resource_path(): string
{
    return trailingslashit(str_replace('src/App/Helpers', '', __DIR__)) . 'resources/';
}

/**
 * Retrieve templates path of the project.
 *
 * @return string
 */
function template_path(): string
{
    return trailingslashit(str_replace('src/App/Helpers', '', __DIR__)) . 'resources/templates';
}

/**
 * Add trailing slash.
 *
 * (original from WordPress)
 *
 * Reference: https://developer.wordpress.org/reference/functions/trailingslashit/
 *
 * @param $string
 *
 * @return string
 */
function trailingslashit( $string ) {
    return untrailingslashit( $string ) . '/';
}

/**
 * Remove trailing slash if it exists.
 *
 * (original from WordPress)
 *
 * Reference: https://developer.wordpress.org/reference/functions/untrailingslashit/
 *
 * @param $string
 *
 * @return string
 */
function untrailingslashit( $string ) {
    return rtrim( $string, '/\\' );
}
