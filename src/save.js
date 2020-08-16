/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

import { __ } from '@wordpress/i18n';

import {
	RichText,
} from '@wordpress/block-editor';
import {Button} from "@wordpress/components";
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
	return (
		<div className={props.className}>
			<h6 className="header">
				{props.attributes.spoilerAlertMessage}
				<span className="instructions">
					{props.attributes.instructions}
				</span>
			</h6>
			<RichText.Content
				className={`content align-${props.attributes.alignment}` }
				tagName="p"
				value={ props.attributes.content }
			/>
		</div>
	);
}
