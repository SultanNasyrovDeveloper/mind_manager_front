import React, { FC } from 'react';
import { Button } from 'antd';
import { Outlet } from 'react-router-dom';

export interface AppProps { }

const App: FC<AppProps> = ({...rest}) => {
  return (
    <div>
      Main App
      <Outlet />
    </div>
  );
};

export default App;