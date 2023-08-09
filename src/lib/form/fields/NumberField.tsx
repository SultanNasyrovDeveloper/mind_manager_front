import React, { FC } from 'react';
import { InputNumber, InputNumberProps } from 'ui';
import Field, { useField, FormFieldProps } from '../Field';

export interface NumberFieldProps
  extends FormFieldProps, Omit<InputNumberProps, 'name'> {}

const NumberField: FC<NumberFieldProps> = (
  { name, label, hidden,  ...controlProps }
) => {
  const [field] = useField(name);
  
  return (
    <Field name={name} label={label} hidden={hidden}>
      <InputNumber {...field} {...controlProps} />
    </Field>
  );
};

export default NumberField;