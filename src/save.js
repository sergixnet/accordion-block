/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { RichText, InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes, className } ) {
	const { title } = attributes;

	return (
		<article className={ className }>
			<h2 className="accordion__title">
				<a href="#">
					<span className="accordion__icon">+</span>
					<RichText.Content
						tagName="span"
						className="accordion__title__text"
						value={ title }
					/>
				</a>
			</h2>
			<div className="accordion__content">
				<InnerBlocks.Content />
			</div>
		</article>
	);
}
