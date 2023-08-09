import React, { FC } from 'react';
import { Select, SelectProps, SelectValue } from 'ui';
import { FormFieldProps, useField } from '..';
import Field from '../Field';

export interface SelectFieldProps<ValueType = SelectValue>
  extends FormFieldProps<SelectProps<ValueType>> {}

const SelectField: FC<SelectFieldProps> = (
  { name, controlProps, ...rest}
) => {
  
  const [field] = useField(name);
  
  return (
    <Field name={name}>
      <Select {...field} {...controlProps}  />
    </Field>
  );
};

export default SelectField;