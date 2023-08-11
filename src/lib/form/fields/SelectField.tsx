import React, { FC } from 'react';
import { Select, SelectProps } from 'ui';
import Field, { useField, FormFieldProps } from '../Field';

export interface SelectFieldProps<Value = any>
  extends FormFieldProps, SelectProps<Value> {}

const SelectField: FC<SelectFieldProps> = (
  { name, label, hidden, ...controlProps}
) => {
  const [field, , helpers] = useField(name);
  return (
    <Field hidden={hidden} name={name} label={label}>
      <Select
        value={field.value}
        onBlur={field.onBlur}
        onChange={(newValue) => helpers.setValue(newValue)}
        {...controlProps}
      />
    </Field>
  );
};

export default SelectField;