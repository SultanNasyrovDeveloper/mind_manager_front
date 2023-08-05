import React, { FC } from 'react';
import { FormItem, Input, InputProps } from '..';
import { FormFieldProps } from '../types';

export interface InputFieldProps
  extends FormFieldProps<InputProps> {}

const InputField: FC<InputFieldProps> = (
  { name, controlProps, ...rest}
) => {
  return (
    <FormItem name={name} {...rest}>
      <Input name={name} {...controlProps} />
    </FormItem>
  );
};

export default InputField;