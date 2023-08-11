import React, { FC } from 'react';
import { SelectProps, SelectItemProps } from 'ui';
import SelectField, { SelectFieldProps } from 'lib/form/fields/SelectField';

export interface SelectMediaTypeFieldProps
	extends Omit<SelectFieldProps, 'controlProps'> {
		controlProps?: Omit<SelectProps, 'items'>
}

const MEDIA_TYPES: SelectItemProps[] = [
	{
		key: 'notSet',
		value: 'not_set',
		label: 'Not Set'
	},
	{
		key: 'youtube',
		value: 'youtube',
		label: 'Youtube'
	}
]

const SelectMediaTypeField: FC<SelectMediaTypeFieldProps> = (
	{ ...rest }
) => {
  return (
    <SelectField
	    defaultValue="not_set"
	    options={MEDIA_TYPES}
	    {...rest}
    />
  );
};

export default SelectMediaTypeField;