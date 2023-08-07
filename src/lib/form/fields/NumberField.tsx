import React, { FC } from 'react';
import { FormFieldProps, InputNumber, InputNumberProps, FormItem } from '..';

export interface NumberFieldProps
	extends FormFieldProps<Omit<InputNumberProps, 'name'>> {}

const NumberField: FC<NumberFieldProps> = (
	{ name, controlProps, ...formItemProps }
) => {
  return (
    <FormItem name={name} {...formItemProps}>
	    <InputNumber name={name} {...controlProps} />
    </FormItem>
  );
};

export default NumberField;