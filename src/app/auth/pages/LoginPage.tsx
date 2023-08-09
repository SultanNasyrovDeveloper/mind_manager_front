import React, { FC, useRef, useCallback, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FormState } from 'lib/form';
import FormActions from 'lib/components/FormActions';
import { useUserStore, getIsCurrentUserAuthenticated } from 'store/user';
import { LoginCredentials } from 'types/auth';
import { Row, Col, Card } from 'ui';
import LoginForm from '../forms/LoginForm';

const LoginPage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const loginFormRef = useRef<FormState<LoginCredentials>>(null);
  const isAuthenticated = useUserStore(getIsCurrentUserAuthenticated);
  const fetchAuthTokens = useUserStore(state => state.fetchAuthTokens);
  const fetchMe = useUserStore(state => state.fetchMe);
  
  const handleLogin = useCallback(
    async (credentials: LoginCredentials) => {
      await fetchAuthTokens(credentials);
      await fetchMe();
  }, [fetchAuthTokens, fetchMe]);
  
  useEffect(() => {
    if (isAuthenticated) navigate('/dashboard');
  }, [isAuthenticated, navigate, location]);
  
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
