import React, { FC, useMemo } from 'react';
import { useField } from 'formik';
import { Form, FormItemProps, ValidateStatus } from 'ui';

export interface FieldProps
  extends Pick<FormItemProps, 'label' | 'children' | 'help' | 'hidden' > {
  name: string;
}

export type FormFieldProps = Omit<FieldProps, 'children'>;


const Field: FC<FieldProps> = ({ name, help, hidden, ...formItemProps }) => {
  const [, meta] = useField(name);
  const validateStatus = useMemo<ValidateStatus>(() => {
    if (meta.touched && meta.error) return 'error';
    if (meta.touched && !meta.error) return 'success';
    return '';
  }, [meta]);
  return (
    <Form.Item
      hidden={hidden}
      hasFeedback={true}
      {...formItemProps}
      validateStatus={validateStatus}
      help={meta.touched && meta.error ? meta.error : help}
    />
  );
};


export { useField } from 'formik';
export default Field;