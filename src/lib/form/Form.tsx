import React, { FC, useCallback } from 'react';
import { Formik, FormikConfig, FormikProps as FormManagerProps } from 'formik';
import { isEqual } from 'lodash';
import { Form as UIForm, FormProps as UIFormProps } from 'ui';

export interface FormProps<DataType = any>
  extends Omit<FormikConfig<DataType>, 'initialValues'>  {
  innerFormProps?: UIFormProps;
  initialValues?: DataType;
  onHasChanged?: (hasChanged: boolean) => void;
}

const Form: FC<FormProps> = (
  {
    initialValues,
    innerFormProps,
    children,
    onHasChanged,
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
    >
      {(props) => {
        onHasChanged && onHasChanged(!isEqual(props.initialValues, props.values));
        return (
          <UIForm {...innerFormProps}>
            {makeFormChildren(props)}
          </UIForm>
        );
      }}
    </Formik>
  );
};

export default Form;
export type { FormManagerProps };