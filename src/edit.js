/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	RichText,
} from '@wordpress/block-editor';

const {
	Card,
	CardBody,
	TextControl,
} = wp.components;

import './editor.scss';
import {Button} from "@wordpress/components";

/**
 * Spoiler Alert block edit function
 *
 * @param {Object} [props] Properties passed from the editor.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	const onChangeContent = (val) => {
		props.setAttributes({
			content: val || ''
		});
	};

	const onChangeAlignment = (newAlignment) => {
		props.setAttributes({
			alignment: newAlignment || 'none'
		});
	};

	const onChangeInstructions = (newValue) => {
		props.setAttributes({
			instructions: newValue
		});
	}

	const onChangeSpoilerAlertMessage = (newValue) => {
		props.setAttributes({
			spoilerAlertMessage: newValue
		});
	}


	return (
		<div className={props.className}>
			{
				<InspectorControls>
					<Card>
						<CardBody>
							<TextControl
								label={__('Spoiler alert message', 'spoiler-alert')}
								help={__('This message is displayed before the spoiler', 'spoiler-alert')}
								value={ props.attributes.spoilerAlertMessage }
								onChange={ onChangeSpoilerAlertMessage }
							/>

							<TextControl
								label={__('Instructions', 'spoiler-alert')}
								help={__('Instructions of how to reveal the spoiler', 'spoiler-alert')}
								value={ props.attributes.instructions }
								onChange={ onChangeInstructions }
							/>
						</CardBody>
					</Card>
				</InspectorControls>
			}
			{
				<BlockControls>
					<AlignmentToolbar
						value={ props.attributes.alignment }
						onChange={ onChangeAlignment }
					/>
				</BlockControls>
			}
			<h6 className="header">
				{props.attributes.spoilerAlertMessage}
				<span className="instructions">
					{props.attributes.instructions}
				</span>
			</h6>
			<RichText
				className={`content ${props.isSelected?'visible':''} align-${props.attributes.alignment}` }
				tagName="p"
				onChange={ onChangeContent }
				value={ props.attributes.content }
			/>
		</div>
	);
}
