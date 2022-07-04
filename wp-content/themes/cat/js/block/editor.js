/* block.js */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
import {
	MediaUpload,
	RichText,
	InspectorControls,
} from '@wordpress/block-editor';
const { PanelBody, Spinner, ButtonGroup, Button, Icon } = wp.components;

import {
	getBackgroundImageControl,
	getButtonControl,
	getContentControl,
} from './getHeroControls';

registerBlockType('cat/hero1', {
	title: __('Hero1a', 'cat'), // Block name visible to user
	icon: 'align-left', // Toolbar icon can be either using WP Dashicons or custom SVG
	category: 'custom-blocks', // Under which category the block would appear
	attributes: {
		heroTitle: {
			type: 'string',
			source: 'html',
			selector: '.heroblock-title',
		},
		heroUpperTitle: {
			type: 'string',
			source: 'html',
			selector: '.heroblock-upperTitle',
		},
		heroContent: {
			type: 'string',
			source: 'html',
			selector: '.heroblock-content',
		},
		heroBackgroundID: {
			type: 'number',
		},
		heroBackgroundImage: {
			type: 'string',
		},
		heroBackgroundColor: {
			type: 'string',
			default: '#fff',
		},
		heroButtons: {
			type: 'array',
			default: [
				{
					visible: false,
					name: 'Button 1',
					text: 'Button 1',
					url: '#',
					theme: 'dark',
				},
				{
					visible: false,
					name: 'Button 2',
					text: 'Button 2',
					url: '#',
					theme: 'light',
				},
			],
		},
		heroButtonsHorizontal: {
			type: 'boolean',
			default: false,
		},
		heroMedia: {
			type: 'object',
			default: {
				id: 0,
				url: '',
				name: '',
				type: '',
			},
		},
		contentBox: {
			type: 'object',
			default: {
				visible: false,
				name: 'Content box',
				color: 'white',
				columnWidth: '50%',
			},
		},
	},
	edit: (props) => {
		const {
			className,
			attributes: {
				heroTitle,
				heroUpperTitle,
				heroContent,
				heroBackgroundImage,
				heroBackgroundColor,
				heroButtons,
				contentBox,
				heroMedia,
				heroButtonsHorizontal,
			},
			setAttributes,
		} = props;
		// How our block renders in the editor in edit mode

		// const onChangeHeroTitle = (newHeroTitle) => {
		// 	setAttributes({ heroTitle: newHeroTitle });
		// };

		const onChangeHeroContent = (newHeroContent) => {
			setAttributes({ heroContent: newHeroContent });
		};

		const getInspectorControls = () => {
			return (
				<InspectorControls key="inspector">
					<PanelBody title={__('Background Image', 'cat')}>
						{getBackgroundImageControl(
							props.attributes,
							setAttributes
						)}
					</PanelBody>
					<PanelBody title={__('Content box', 'cat')}>
						{getContentControl(props.attributes, setAttributes)}
					</PanelBody>
					<PanelBody title={__('Button', 'cat')}>
						{getButtonControl(props.attributes, setAttributes)}
					</PanelBody>
				</InspectorControls>
			);
		};

		return (
			<Fragment>
				{getInspectorControls()}
				<div
					className={`${className} heroblock heroblock-section`}
					style={{
						backgroundImage: `url(${heroBackgroundImage})`,
						backgroundColor: heroBackgroundColor,
					}}
				>
					<div className="overlay"></div>
					<div
						className={`container ${
							contentBox.columnWidth === '100%'
								? 'align--vertical'
								: ''
						}`}
					>
						<div
							style={{
								width: contentBox.columnWidth,
							}}
							className={`column heroblock-contentBox ${
								contentBox.visible ? 'has-box' : ''
							}`}
						>
							<h1 className="heroblock-upperTitle">
								<RichText
									placeholder={__('Upper title……………', 'cat')}
									value={heroUpperTitle}
									onChange={(newUpperTitle) => {
										setAttributes({
											heroUpperTitle: newUpperTitle,
										});
									}}
								/>
							</h1>
							<h2 className="heroblock-title">
								<RichText
									placeholder={__('Title……………', 'cat')}
									value={heroTitle}
									onChange={(newTitle) => {
										setAttributes({
											heroTitle: newTitle,
										});
									}}
								/>
							</h2>
							<p className="heroblock-content">
								<RichText
									placeholder={__('Description……………', 'cat')}
									value={heroContent}
									onChange={onChangeHeroContent}
								/>
							</p>
							{heroButtons.length > 0 && (
								<div
									className={`cat-bg__buttonWrapper ${
										heroButtonsHorizontal
											? 'align--horizontal'
											: ''
									}`}
								>
									{heroButtons.map(
										(button, index) =>
											button.visible && (
												<a
													key={`button-${index}`}
													className={`cat-bg__button ${button.theme}`}
													onClick={() => {}}
													href={button.url}
												>
													{button.text}
												</a>
											)
									)}
								</div>
							)}
						</div>
						<div
							style={{
								width: contentBox.columnWidth,
							}}
							className="column heroblock-mediaWrapper"
						>
							{heroMedia.id && heroMedia.type === 'image' ? (
								<img
									className="heroblock-media"
									src={heroMedia.url}
									alt={heroMedia.name}
								/>
							) : (
								heroMedia.type === 'video' && (
									<video
										className="heroblock-video"
										controls={true}
									>
										<source
											src={heroMedia.url}
											type="video/mp4"
										/>
										Your browser does not support HTML
										video.
									</video>
								)
							)}
							<MediaUpload
								onSelect={(heroMediaObject) => {
									heroMedia.url = heroMediaObject.url;
									heroMedia.id = heroMediaObject.id;
									heroMedia.name = heroMediaObject.name;
									heroMedia.type = heroMediaObject.type;
									setAttributes({
										heroMedia: { ...heroMedia },
									});
								}}
								allowedTypes={['image', 'video']}
								value={heroMedia.id}
								render={({ open }) => (
									<>
										<ButtonGroup>
											<Button
												className="cat-panel__button"
												onClick={open}
												variant="primary"
											>
												{!heroMedia.id && (
													<Icon icon="format-image" />
												)}
												{!!heroMedia.id &&
													heroMedia.url &&
													__('Update file', 'cat')}
												{!!heroMedia.id &&
													!heroMedia.url && (
														<Spinner />
													)}
											</Button>
											{!!heroMedia.id && (
												<Button
													className="cat-panel__button"
													onClick={() => {
														heroMedia.id =
															undefined;
														heroMedia.url = '';
														heroMedia.name = '';
														heroMedia.type = '';
														setAttributes({
															heroMedia: {
																...heroMedia,
															},
														});
													}}
													isDestructive
												>
													{__('Remove file', 'cat')}
												</Button>
											)}
										</ButtonGroup>
									</>
								)}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	},

	save: (props) => {
		return (
			<section
				className={`heroblock heroblock-section`}
				style={{
					backgroundImage: `url(${props.attributes.heroBackgroundImage})`,
					backgroundColor: props.attributes.heroBackgroundColor,
				}}
			>
				<div className="overlay"></div>
				<div
					className={`container ${
						props.attributes.contentBox.columnWidth === '100%'
							? 'align--vertical'
							: ''
					} `}
				>
					<div
						style={{
							width: props.attributes.contentBox.columnWidth,
						}}
						className={`column heroblock-contentBox ${
							props.attributes.contentBox.visible ? 'has-box' : ''
						}`}
					>
						{props.attributes.heroUpperTitle && (
							<h1 className="heroblock-upperTitle">
								<RichText.Content
									value={props.attributes.heroUpperTitle}
								/>
							</h1>
						)}

						{props.attributes.heroTitle && (
							<h2 className="heroblock-title">
								<RichText.Content
									value={props.attributes.heroTitle}
								/>
							</h2>
						)}

						{props.attributes.heroContent && (
							<p className="heroblock-content">
								<RichText.Content
									value={props.attributes.heroContent}
								/>
							</p>
						)}

						{props.attributes.heroButtons.length > 0 && (
							<div
								className={`cat-bg__buttonWrapper  ${
									props.attributes.heroButtonsHorizontal
										? 'align--horizontal'
										: ''
								}`}
							>
								{props.attributes.heroButtons.length > 0 &&
									props.attributes.heroButtons.map(
										(button, index) =>
											button.visible && (
												<a
													key={`button-${index}`}
													className={`cat-bg__button ${button.theme}`}
													onClick={() => {}}
													href={button.url}
												>
													{button.text}
												</a>
											)
									)}
							</div>
						)}
					</div>
					{props.attributes.heroMedia.id ? (
						<div
							style={{
								width: props.attributes.contentBox.columnWidth,
							}}
							className="column heroblock-mediaWrapper"
						>
							{props.attributes.heroMedia.type === 'image' ? (
								<figure>
									<img
										className="heroblock-media"
										src={props.attributes.heroMedia.url}
										alt={props.attributes.heroMedia.name}
									/>
								</figure>
							) : (
								props.attributes.heroMedia.type === 'video' && (
									<figure>
										<video
											className="heroblock-video"
											controls
										>
											<source
												src={
													props.attributes.heroMedia
														.url
												}
												type="video/mp4"
											/>
											Your browser does not support HTML
											video.
										</video>
									</figure>
								)
							)}
						</div>
					) : (
						''
					)}
				</div>
			</section>
		);
	},
});
