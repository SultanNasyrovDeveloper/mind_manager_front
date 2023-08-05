import React, { FC } from 'react';
import { FormItem, Input, TextAreaProps } from '..';
import { FormFieldProps } from '../types';

export interface TextFieldProps
	extends FormFieldProps<TextAreaProps> {}

const TextField: FC<TextFieldProps> = (
	{ name, controlProps, ...rest }
) => {
  return (
    <FormItem name={name} {...rest}>
	    <Input.TextArea name={name} {...controlProps} />
    </FormItem>
  );
};

export default TextField;