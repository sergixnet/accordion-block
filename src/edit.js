/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { RichText, InnerBlocks } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { className, attributes, setAttributes } ) {
	const { title } = attributes;
	const onChangeTitle = ( title ) => setAttributes( { title } );
	const ALLOWED_BLOCKS = [ 'core/paragraph', 'core/list' ];

	return (
		<article className={ className }>
			<h2 className="accordion__title">
				<a href="#">
					<span className="accordion__icon">+</span>
					<RichText
						tagName="span"
						className="accordion__title"
						value={ title }
						multiline={ 'span' }
						onChange={ onChangeTitle }
						placeholder={ __( 'Title', 'accordion' ) }
						allowedFormats={ [] }
					/>
				</a>
			</h2>
			<div className="accordion__content">
				<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
			</div>
		</article>
	);
}
