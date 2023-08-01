import React, { FC } from 'react';
import { FormItem, Input, InputProps } from '..';
import { FormFieldProps } from '../types';

export interface PasswordFieldProps
	extends FormFieldProps<Omit<InputProps, 'name'>> {}

const PasswordField: FC<PasswordFieldProps> = (
	{ name, controlProps, ...rest}
) => {
  return (
    <FormItem name={name} {...rest} >
	    <Input.Password name={name} {...controlProps} />
    </FormItem>
  );
};

export default PasswordField;