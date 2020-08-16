<?php
/**
 * Plugin Name:     Spoiler Alert
 * Description:     Spoiler Alert Block - Warn your readers when there is a spoiler and blur it.
 * Version:         0.1.0
 * Author:          Luiz Mitidiero
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     spoiler-alert
 *
 * @package         spoiler-alert
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function spoiler_alert_spoiler_alert_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "spoiler-alert/spoiler-alert" block first.'
		);
	}

	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'spoiler-alert-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	$editor_css = 'build/index.css';
	wp_register_style(
		'spoiler-alert-block-editor-style',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'spoiler-alert-spoiler-alert-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'spoiler-alert/spoiler-alert', array(
		'editor_script' => 'spoiler-alert-block-editor',
		'editor_style'  => 'spoiler-alert-block-editor-style',
		'style'         => 'spoiler-alert-spoiler-alert-block',
	) );
}
add_action( 'init', 'spoiler_alert_spoiler_alert_block_init' );


function spoiler_alert_spoiler_alert_block_translations() {
	wp_set_script_translations( 'spoiler-alert-block-editor', 'spoiler-alert',
		plugin_dir_path( __FILE__ ) . 'languages' );
}

add_action( 'init', 'spoiler_alert_spoiler_alert_block_translations' );
