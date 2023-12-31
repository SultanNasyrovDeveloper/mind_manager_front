import React, { FC, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import UserMenu from 'app/user/components/UserMenu';
import useAsyncOnce from 'lib/hooks/useAsyncOnce';
import { useLearningSessionStore } from 'store/learning-session';
import { useUserStore } from 'store/user';
import { AppLayout, Row, SidebarMenu } from 'ui';
import {
  ApartmentOutlined,
  AppstoreOutlined,
  FileSyncOutlined
} from 'ui/icons';

export interface AppProps { }

const App: FC<AppProps> = ({...rest}) => {
  const user = useUserStore(state => state.currentUser);
  const activeLearningSession = useLearningSessionStore(
    state => state.activeSession
  );
  const fetchMe = useUserStore(state => state.fetchMe);
  const fetchMyActiveLearningSession = useLearningSessionStore(
    state => state.fetchMyActive
  );
  const sidebarItems = useMemo(() => [
    {
      key: 'dashboard',
      icon: <AppstoreOutlined />,
      to: '/dashboard'
    },
    {
      key: 'palace',
      icon: <ApartmentOutlined />,
      to: user ? `/palace/${user.mind_palace}` : ''
    },
    {
      key: 'learning/sessions',
      icon: <FileSyncOutlined />,
      to: '/learning/sessions'
    },
  ], [user]);
  
  useAsyncOnce(async () => {
    if (!user) await fetchMe();
    if (!activeLearningSession) await fetchMyActiveLearningSession();
  });
  
  return (
    <AppLayout
      sidebarContent={<SidebarMenu items={sidebarItems} />}
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