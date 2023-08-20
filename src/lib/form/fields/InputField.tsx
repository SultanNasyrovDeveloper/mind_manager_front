import React, { FC } from 'react';
import { Input, InputProps } from 'ui';
import Field, { useField, FormFieldProps } from '../Field';

export interface InputFieldProps
	extends FormFieldProps, Omit<InputProps, 'name'> {}

const InputField: FC<InputFieldProps> = (
	{ name, label, ...controlProps }
) => {
	const [field] = useField(name);
	
  return (
	  <Field name={name} label={label}>
		  <Input {...field} />
	  </Field>
  );
};

export default InputField;