import React, { FC } from 'react';
import { FormItem, Input, InputProps } from '..';
import { FormFieldProps } from '../types';

export interface EmailFieldProps
  extends FormFieldProps<Omit<InputProps, 'name'>> {

}

const EmailField: FC<EmailFieldProps> = (
  { name, controlProps, ...rest}
) => {
  return (
    <FormItem name={name} {...rest}>
      <Input
        name={name}
        {...controlProps}
        type="email"
      />
    </FormItem>
  );
};

export default EmailField;