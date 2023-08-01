import React, { FC } from 'react';
import {
  FormManager,
  FormManagerProps,
  Form,
  EmailField,
  PasswordField
} from 'lib/form';
import { LoginCredentials } from 'types/auth';
import { loginFormValidationSchema } from './validation';

export interface LoginFormProps
  extends Omit<FormManagerProps<LoginCredentials>, 'initialValues'> {

}

const LoginForm: FC<LoginFormProps> = ({...rest}) => {
  return (
    <FormManager
      validateOnBlur
      initialValues={{ email: '', password: '' }}
      validationSchema={loginFormValidationSchema}
      {...rest}
    >
      <Form layout="vertical">
        <EmailField
          name="email"
          label="Email"
          controlProps={{ placeholder: 'Enter email' }}
        />
        <PasswordField
          name="password"
          label="Password"
          controlProps={{ placeholder: 'Enter your password...' }}
        />
      </Form>
    </FormManager>
  );
};

export default LoginForm;