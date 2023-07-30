import React, { FC, useRef, useCallback, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormProps } from 'lib/form';
import FormActions from 'lib/form/FormActions';
import { useUserStore, getIsCurrentUserAuthenticated } from 'store/user';
import { LoginCredentials } from 'types/auth';
import { Row, Col, Card } from 'ui';
import LoginForm from '../forms/LoginForm';

export interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = ({...rest}) => {
  const navigate = useNavigate();
  const loginFormRef = useRef<FormProps<LoginCredentials>>(null);
  const isAuthenticated = useUserStore(getIsCurrentUserAuthenticated);
  const login = useUserStore(state => state.login);
  const fetchMe = useUserStore(state => state.fetchMe);
  
  const handleLogin = useCallback(
    async (credentials: LoginCredentials) => {
      await login(credentials);
      await fetchMe();
  }, [login, fetchMe]);
  
  useEffect(() => {
    if (isAuthenticated) navigate('/dashboard');
  }, [isAuthenticated, navigate]);
  
  return (
    <Row justify="center">
      <Col xs={24} md={12} xl={8}>
        <Card title="Login Form">
          <LoginForm
            innerRef={loginFormRef}
            onSubmit={handleLogin}
          />
          <Row justify="end">
            <Link to="#">Sign Up</Link>
          </Row>
          <FormActions
            onClear={() => loginFormRef.current?.resetForm()}
            onSave={() => loginFormRef.current?.submitForm()}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default LoginPage;
