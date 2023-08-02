import React, { FC, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import UserMenu from 'app/user/components/UserMenu';
import { useUserStore } from 'store/user';
import { AppLayout, Row, SidebarMenu } from 'ui';
import { AppstoreOutlined, ApartmentOutlined } from 'ui/icons';

export interface AppProps { }

const App: FC<AppProps> = ({...rest}) => {
  const user = useUserStore(state => state.currentUser);
  
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
    />
  );
};

export default App;