import React, { FC, useEffect } from 'react';
import { Select, SelectProps } from 'ui';
import Field, { useField, FormFieldProps } from '../Field';

export interface SelectFieldProps<Value = any>
  extends FormFieldProps, SelectProps<Value> {}

const SelectField: FC<SelectFieldProps> = (
  { name, label, hidden, help, ...controlProps}
) => {
  const [field, , helpers] = useField(name);
  const { defaultValue, ...restControlProps} = controlProps;
  useEffect(() => {
    if (defaultValue) helpers.setValue(defaultValue);
  }, [defaultValue, helpers]);
  
  return (
    <Field hidden={hidden} name={name} label={label} help={help}>
      <Select
        value={field.value}
        onBlur={field.onBlur}
        onChange={(newValue) => helpers.setValue(newValue, true)}
        defaultValue={defaultValue}
        {...restControlProps}
      />
    </Field>
  );
};

export default SelectField;