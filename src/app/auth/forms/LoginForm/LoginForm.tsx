import React, { FC } from 'react';
import {
  FormManager,
  FormManagerProps,
  Form,
  FormItem,
  Input
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
        <FormItem name="email" label="Email">
          <Input
            name="email"
            type="email"
            placeholder="example@gmail.com"
          />
        </FormItem>
        <FormItem name="password" label="Password">
          <Input.Password
            name="password"
            placeholder="Enter your password..."
          />
        </FormItem>
      </Form>
    </FormManager>
  );
};

export default LoginForm;