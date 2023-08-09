import React, { FC } from 'react';
import Form, { FormProps } from 'lib/form';
import InputField from 'lib/form/fields/InputField';
import PasswordField from 'lib/form/fields/PasswordField';
import { LoginCredentials } from 'types/auth';
import { loginFormValidationSchema } from './validation';

export interface LoginFormProps
  extends Omit<FormProps<LoginCredentials>, 'initialValues'> {
}

const LoginForm: FC<LoginFormProps> = (
  { ...rest}
) => {
  return (
    <Form
      validateOnBlur
      initialValues={{ email: '', password: '' }}
      validationSchema={loginFormValidationSchema}
      {...rest}
    >
      <InputField name="email" label="Email" type="email"/>
      <PasswordField name="password" label="Password"/>
    </Form>
  );
};

export default LoginForm;