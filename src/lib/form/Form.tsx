import React, { FC, ReactNode } from 'react';
import { Formik, FormikConfig } from 'formik';
import { Form as UIForm, FormProps as UIFormProps } from 'ui';

export interface FormProps<DataType = any>
  extends Omit<FormikConfig<DataType>, 'children'|  'initialValues'>  {
  innerFormProps?: UIFormProps;
  children?: ReactNode;
  initialValues?: DataType;
}

const Form: FC<FormProps> = (
  {
    initialValues,
    innerFormProps,
    children,
    ...formikProps
  }
) => {
  return (
    <Formik initialValues={initialValues || {}} {...formikProps}>
      <UIForm {...innerFormProps}>{ children }</UIForm>
    </Formik>
  );
};

export default Form;