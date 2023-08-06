import React, { FC, useMemo } from 'react';
import { SelectProps } from 'ui';
import { FormItem, Select } from '..';
import { FormFieldProps } from '../types';

export interface SelectFieldProps
	extends FormFieldProps<SelectProps> {}

const SelectField: FC<SelectFieldProps> = (
	{ name, controlProps, ...rest }
) => {
	const control = useMemo(() => (
		<Select name={name} {...controlProps} />
	), [name, controlProps]);
  return (
    <FormItem name={name} {...rest}>
	    { control }
    </FormItem>
  );
};

export default SelectField;