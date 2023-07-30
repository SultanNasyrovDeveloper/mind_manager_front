import React, { FC, useMemo, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import useLogout from 'app/auth/hooks/useLogout';
import UserMenu from 'app/user/components/UserMenu';
import { useUserStore, getIsCurrentUserAuthenticated } from 'store/user';
import { AppLayout, Row, SidebarMenu } from 'ui';
import { AppstoreOutlined, ApartmentOutlined } from 'ui/icons';

export interface AppProps { }

const App: FC<AppProps> = ({...rest}) => {
  const location = useLocation();
  const logout = useLogout();
  const user = useUserStore(state => state.currentUser);
  const isAuthenticated = useUserStore(getIsCurrentUserAuthenticated);
  
  const sidebarItems = useMemo(() => [
    {
      key: 'dashboard',
      icon: <AppstoreOutlined />,
      to: '/dashboard'
    },
    {
      key: 'palace',
      icon: <ApartmentOutlined />,
      to: `/palace/${user ? user.mind_palace : ''}`
    }
  ], [user]);
  
  useEffect(() => {
    if (location && !isAuthenticated) logout();
  }, [location, isAuthenticated, logout]);
  
  return (
    <AppLayout
      sidebarContent={
        <SidebarMenu items={sidebarItems} />
      }
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