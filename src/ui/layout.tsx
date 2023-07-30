import React, { FC, ReactNode } from 'react';
import { Layout as BaseLayout } from 'antd';
import styled from 'styled-components';

export interface AppLayoutProps {
  headerContent: ReactNode;
  sidebarContent: ReactNode;
  mainContent: ReactNode;
  footerContent: ReactNode;
}

const BaseLayoutStyled = styled(BaseLayout)`
  height: 100vh;
  width: 100vw;
  
  .app-header-container {
    background-color: transparent;
    border: antiquewhite;
  }
  
  .app-sidebar-container, .app-header-container {
    background-color: transparent;
    border: antiquewhite;
  }
`;

export const AppLayout: FC<AppLayoutProps> = (
  { headerContent, sidebarContent, mainContent, footerContent }
) => {
  return (
    <BaseLayoutStyled>
      <BaseLayout.Header className="app-header-container">
        { headerContent }
      </BaseLayout.Header>
      <BaseLayout>
        <BaseLayout.Sider className="app-sidebar-container">
          { sidebarContent }
        </BaseLayout.Sider>
        <BaseLayout.Content className="app-content-container">
          { mainContent }
        </BaseLayout.Content>
      </BaseLayout>
      <BaseLayout.Footer>{ footerContent }</BaseLayout.Footer>
    </BaseLayoutStyled>
  );
};
