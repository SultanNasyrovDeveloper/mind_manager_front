import React, { FC, ReactNode } from 'react';
import { Formik, FormikConfig } from 'formik';
import { Form as UIForm, FormProps as UIFormProps } from 'ui';

export interface FormProps<DataType = any>
  extends Omit<FormikConfig<DataType>, 'children'>  {
  innerFormProps?: UIFormProps;
  children?: ReactNode;
}

const Form: FC<FormProps> = (
  {
    innerFormProps,
    children,
    ...formikProps
  }
) => {
  return (
    <Formik {...formikProps}>
      <UIForm {...innerFormProps}>{ children }</UIForm>
    </Formik>
  );
};

export default Form;