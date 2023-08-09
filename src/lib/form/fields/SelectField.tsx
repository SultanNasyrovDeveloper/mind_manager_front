import React, { FC } from 'react';
import { Select, SelectProps } from 'ui';
import Field, { useField, FormFieldProps } from '../Field';

export interface SelectFieldProps
  extends FormFieldProps, SelectProps {}

const SelectField: FC<SelectFieldProps> = (
  { name, label, ...controlProps}
) => {
  const [field] = useField(name);
  
  return (
    <Field name={name} label={label}>
      <Select {...field} {...controlProps} />
    </Field>
  );
};

export default SelectField;