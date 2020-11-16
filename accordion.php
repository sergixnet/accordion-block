<?php
/**
 * Plugin Name:     Accordion
 * Description:     Example block written with ESNext standard and JSX support – build step required.
 * Version:         0.1.0
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     accordion
 *
 * @package         snet
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function snet_accordion_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "snet/accordion" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require $script_asset_path;
	wp_register_script(
		'snet-accordion-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version'],
		false
	);
	wp_set_script_translations( 'snet-accordion-block-editor', 'accordion' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'snet-accordion-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'snet-accordion-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type(
		'snet/accordion',
		array(
			'editor_script' => 'snet-accordion-block-editor',
			'editor_style'  => 'snet-accordion-block-editor',
			'style'         => 'snet-accordion-block',
		)
	);
}
add_action( 'init', 'snet_accordion_block_init' );

/**
 * Assets for frontend
 */
function snet_accordion_assets() {

	if ( ! is_admin() ) {
		wp_enqueue_script(
			'accordion-js',
			plugins_url( 'js/my-accordion.js', __FILE__ ),
			array( 'jquery' ),
			'1.0',
			true
		);
	}

}
add_action( 'enqueue_block_assets', 'snet_accordion_assets' );
