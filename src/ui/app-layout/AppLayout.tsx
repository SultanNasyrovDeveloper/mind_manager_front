import React, { FC, ReactNode } from 'react';
import { Layout as BaseLayout } from 'antd';
import styled from 'styled-components';

export interface AppLayoutProps {
  headerContent: ReactNode;
  sidebarContent: ReactNode;
  mainContent: ReactNode;
}

const BaseLayoutStyled = styled(BaseLayout)`
  height: 100vh;
  width: 100vw;
  
  .app-header-container {
    background-color: lightgrey;
    padding-right: 20px;
    padding-left: 32px;
  }
  
  .app-sidebar-container {
    background-color: transparent;
  }
  
  .app-content-container {
    padding: 8px 4px;
  }
`;

export const AppLayout: FC<AppLayoutProps> = (
  { headerContent, sidebarContent, mainContent }
) => {
  return (
    <BaseLayoutStyled>
      <BaseLayout.Header className="app-header-container">
        { headerContent }
      </BaseLayout.Header>
      <BaseLayout>
        <BaseLayout.Sider
          collapsed
          className="app-sidebar-container"
        >
          { sidebarContent }
        </BaseLayout.Sider>
        <BaseLayout.Content
          className="app-content-container"
        >
          { mainContent }
        </BaseLayout.Content>
      </BaseLayout>
    </BaseLayoutStyled>
  );
};

export default AppLayout
