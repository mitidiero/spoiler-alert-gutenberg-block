/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Customized Icons - Icon made by https://www.flaticon.com/authors/freepik
 */
import { ReactComponent as SpoilerAlertIcon } from './alert.svg';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( 'spoiler-alert/spoiler-alert', {
	title: __( 'Spoiler Alert', 'spoiler-alert' ),
	description: __(
		'Spoiler Alert Block - Warn your readers when there is a spoiler and blur it.',
		'spoiler-alert'
	),
	category: 'widgets',
	icon: SpoilerAlertIcon,
	supports: {
		html: false,
	},
	attributes: {
		spoilerAlertMessage: {
			type: 'string',
			default: __('Spoiler alert!', 'spoiler-alert'),
		},
		instructions: {
			type: 'string',
			default: __('Hover or click to reveal.', 'spoiler-alert'),
		},
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
		alignment: {
			type: 'string',
			default: 'none',
		},
	},
	edit: Edit,
	save,
} );
