import React, { FC, useCallback } from 'react';
import { Formik, FormikConfig, FormikProps as FormManagerProps } from 'formik';
import { Form as UIForm, FormProps as UIFormProps } from 'ui';

export interface FormProps<DataType = any>
  extends Omit<FormikConfig<DataType>, 'initialValues'>  {
  innerFormProps?: UIFormProps;
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
  
  const makeFormChildren = useCallback((props: FormManagerProps<any>) => {
    if (typeof children === 'function') return children(props);
    return children;
  }, [children]);
  
  return (
    <Formik
      initialValues={initialValues || {}}
      {...formikProps}
      children={(props) => (
        <UIForm {...innerFormProps}>{ makeFormChildren(props) }</UIForm>
      )}
    />
  );
};

export default Form;
export type { FormManagerProps };