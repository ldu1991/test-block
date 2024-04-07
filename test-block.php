<?php
/**
 * Plugin Name:       Test Block
 * Description:       Test block for vanilla gutenberg
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       test-block
 *
 * @package Tt
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

add_action( 'enqueue_block_editor_assets', 'tt_set_scripts_block_editor' );
add_action('wp_enqueue_scripts', 'tt_set_scripts_block_editor');
function tt_set_scripts_block_editor() {
	wp_enqueue_style('tt-swiper-style-editor', '//cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');
	wp_enqueue_script('tt-swiper-script-editor', '//cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', array('jquery'), wp_get_theme()->get( 'Version' ), true);
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function tt_test_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'tt_test_block_block_init' );
