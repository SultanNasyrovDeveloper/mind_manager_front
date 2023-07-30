import React, { FC, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import useLogout from 'app/auth/hooks/useLogout';
import UserMenu from 'app/user/components/UserMenu';
import { useUserStore, getIsCurrentUserAuthenticated } from 'store/user';
import { AppLayout, Row } from 'ui';

export interface AppProps { }

const App: FC<AppProps> = ({...rest}) => {
  const location = useLocation();
  const logout = useLogout();
  const isAuthenticated = useUserStore(getIsCurrentUserAuthenticated);
  
  useEffect(() => {
    if (location && !isAuthenticated) logout();
  }, [location, isAuthenticated, logout]);
  
  return (
    <AppLayout
      sidebarContent="Sidebar"
      headerContent={
        <Row justify="space-between" align="middle">
          <span>Mind Manager</span>
          <UserMenu />
        </Row>
      }
      mainContent={<Outlet />}
      footerContent="Footer"
    />
  );
};

export default App;