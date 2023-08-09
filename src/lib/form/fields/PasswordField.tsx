import React, { FC } from 'react';
import { Input, InputProps } from 'ui';
import Field, { useField, FormFieldProps } from '../Field';

export interface PasswordFieldProps
	extends FormFieldProps, Omit<InputProps, 'name'> {}

const PasswordField: FC<PasswordFieldProps> = (
	{ name, label, ...controlProps}
) => {
	const [field] = useField(name);
	
  return (
	  <Field name={name} label={label} >
		  <Input.Password {...field} {...controlProps} />
	  </Field>
  );
};

export default PasswordField;