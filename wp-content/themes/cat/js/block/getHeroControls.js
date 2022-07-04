import { __, sprintf } from '@wordpress/i18n';
import { MediaUpload } from '@wordpress/block-editor';
const {
	PanelBody,
	Toolbar,
	ToolbarGroup,
	ToolbarButton,
	FocalPointPicker,
	Spinner,
	ResponsiveWrapper,
	ButtonGroup,
	Button,
	ColorPalette,
	Icon,
	ToggleControl,
	TextControl,
	CheckboxControl,
	SelectControl,
} = wp.components;

export const getBackgroundImageControl = (attributes, setAttributes) => {
	return (
		<>
			<MediaUpload
				title={__('Background Image', 'cat')}
				onSelect={(imageObject) =>
					setAttributes({
						heroBackgroundImage: imageObject.url,
						heroBackgroundID: imageObject.id,
					})
				}
				value={attributes.heroBackgroundID}
				render={({ open }) => (
					<>
						{!!attributes.heroBackgroundID &&
							attributes.heroBackgroundImage && (
								<img
									src={attributes.heroBackgroundImage}
									alt={__('Background image')}
								/>
							)}
						<ButtonGroup>
							<Button
								className="cat-panel__button"
								onClick={open}
								variant="primary"
							>
								{!attributes.heroBackgroundID &&
									__('Upload image', 'cat')}
								{!!attributes.heroBackgroundID &&
									attributes.heroBackgroundImage &&
									__('Update image', 'cat')}
								{!!attributes.heroBackgroundID &&
									!attributes.heroBackgroundImage && (
										<Spinner />
									)}
							</Button>
							{!!attributes.heroBackgroundID && (
								<Button
									className="cat-panel__button"
									onClick={() =>
										setAttributes({
											heroBackgroundID: undefined,
											heroBackgroundImage: '',
										})
									}
									isDestructive
								>
									{__('Remove image', 'cat')}
								</Button>
							)}
						</ButtonGroup>
					</>
				)}
			/>

			<ColorPalette
				colors={[
					{ name: 'gray', color: '#f1f1f0' },
					{ name: 'white', color: '#fff' },
					{ name: 'black', color: '#000' },
				]}
				value={attributes.heroBackgroundColor}
				onChange={(heroBackgroundColor) =>
					setAttributes({ heroBackgroundColor })
				}
			/>
		</>
	);
};

export const getButtonControl = (attributes, setAttributes) => {
	const isMultipleButtons = attributes.heroButtons.filter(
		(item) => item.visible
	);
	return (
		<>
			{isMultipleButtons.length > 1 && (
				<CheckboxControl
					label={__('Is horizontal', 'cat')}
					help="are the buttons horizontal?"
					checked={attributes.heroButtonsHorizontal}
					onChange={() =>
						setAttributes({
							heroButtonsHorizontal:
								!attributes.heroButtonsHorizontal,
						})
					}
				/>
			)}
			{attributes.heroButtons.map((button, index) => (
				<>
					<ToggleControl
						key={`button-${index}`}
						label={button.name}
						checked={button.visible}
						onChange={() => {
							button.visible = !button.visible;
							setAttributes({
								heroButtons: [...attributes.heroButtons],
							});
						}}
					/>
					{button.visible && (
						<>
							<TextControl
								label={`${button.name} text`}
								value={button.text}
								onChange={(value) => {
									button.text = value;
									setAttributes({
										heroButtons: [
											...attributes.heroButtons,
										],
									});
								}}
							/>
							<TextControl
								label={`${button.name} url`}
								type="url"
								value={button.url}
								onChange={(value) => {
									button.url = value;
									setAttributes({
										heroButtons: [
											...attributes.heroButtons,
										],
									});
								}}
							/>
						</>
					)}
				</>
			))}
		</>
	);
};

export const getContentControl = (attributes, setAttributes) => {
	return (
		<>
			<ToggleControl
				label={attributes.contentBox.name}
				checked={attributes.contentBox.visible}
				onChange={() => {
					setAttributes({
						contentBox: {
							...attributes.contentBox,
							visible: !attributes.contentBox.visible,
						},
					});
				}}
			/>
			<SelectControl
				label="Layout"
				value={attributes.contentBox.columnWidth}
				options={[
					{ label: 'Vertical', value: '100%' },
					{ label: 'Horizontal', value: '50%' },
				]}
				onChange={(newWidth) => {
					setAttributes({
						contentBox: {
							...attributes.contentBox,
							columnWidth: newWidth,
						},
					});
				}}
				__nextHasNoMarginBottom
			/>
		</>
	);
};
