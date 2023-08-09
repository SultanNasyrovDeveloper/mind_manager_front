import React, { FC } from 'react';
import { Input, InputProps } from 'ui';
import Field, { useField, FormFieldProps } from '../Field';

export interface InputFieldProps
	extends FormFieldProps<InputProps> {
}

const InputField: FC<InputFieldProps> = (
	{ name, label, controlProps, ...rest }
) => {
	const [field] = useField(name);
	
  return (
	  <Field name={name} label={label}>
		  <Input {...field} {...controlProps} />
	  </Field>
  );
};

export default InputField;