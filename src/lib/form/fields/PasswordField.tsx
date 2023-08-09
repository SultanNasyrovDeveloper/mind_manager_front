import React, { FC } from 'react';
import { Input, InputProps } from 'ui';
import Field, { useField, FormFieldProps } from '../Field';

export interface PasswordFieldProps
	extends FormFieldProps<InputProps> {}

const PasswordField: FC<PasswordFieldProps> = (
	{ name, label, controlProps, ...rest}
) => {
	const [field] = useField(name);
	
  return (
	  <Field name={name} label={label} {...rest}>
		  <Input.Password {...field} {...controlProps} />
	  </Field>
  );
};

export default PasswordField;