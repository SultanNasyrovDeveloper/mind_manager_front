import React, { FC } from 'react';
import { SelectProps } from 'ui';
import { FormItem, Select } from '..';
import { FormFieldProps } from '../types';

export interface SelectFieldProps
	extends FormFieldProps<SelectProps> {}

const SelectField: FC<SelectFieldProps> = (
	{ name, controlProps, ...rest }
) => {
  return (
    <FormItem name={name} {...rest}>
	    <Select name={name} {...controlProps} />
    </FormItem>
  );
};

export default SelectField;