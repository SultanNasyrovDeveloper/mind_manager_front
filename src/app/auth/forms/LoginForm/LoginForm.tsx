import React, { FC } from 'react';
import Form, { FormProps } from 'lib/form';
import InputField from 'lib/form/fields/InputField';
import PasswordField from 'lib/form/fields/PasswordField';
import { LoginCredentials } from 'types/auth';
import { loginFormValidationSchema } from './validation';

export interface LoginFormProps
  extends FormProps<LoginCredentials> {

}

const LoginForm: FC<LoginFormProps> = (
  { initialValues, ...rest}
) => {
  return (
    <Form
      validateOnBlur
      initialValues={initialValues || {}}
      validationSchema={loginFormValidationSchema}
      {...rest}
    >
      <InputField
        name="email"
        label="Email"
        controlProps={{ type: 'email'}}
      />
      <PasswordField
        name="password"
        label="Password"
      />
    </Form>
  );
};

export default LoginForm;