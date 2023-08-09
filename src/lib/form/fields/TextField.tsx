import React, { FC } from 'react';
import { Input, TextAreaProps } from 'ui';
import Field, { useField, FormFieldProps } from '../Field';

export interface TextFieldProps
  extends FormFieldProps, Omit<TextAreaProps, 'name'> {}

const TextField: FC<TextFieldProps> = (
  {name, label, ...controlProps}
) => {
  const [field] = useField<string>(name);
  return (
    <Field name={name} label={label}>
      <Input.TextArea {...field} {...controlProps} />
    </Field>
  );
};

export default TextField;