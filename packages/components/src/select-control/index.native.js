/**
 * Internal dependencies
 */
import ButtonPickerCell from '../mobile/bottom-sheet/button-picker-cell';

function SelectControl( {
	help,
	instanceId,
	label,
	multiple = false,
	onChange,
	options = [],
	className,
	hideLabelFromVision,
	...props
} ) {
	const id = `inspector-select-control-${ instanceId }`;

	return (
		<ButtonPickerCell
			label={ label }
			hideLabelFromVision={ hideLabelFromVision }
			id={ id }
			help={ help }
			className={ className }
			onChangeValue={ onChange }
			aria-describedby={ !! help ? `${ id }__help` : undefined }
			multiple={ multiple }
			options={ options }
			{ ...props }
		/>
	);
}

export default SelectControl;
