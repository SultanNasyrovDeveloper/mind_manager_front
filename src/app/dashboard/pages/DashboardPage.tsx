import React, { FC } from 'react';

export interface DashboardPageProps {}

const DashboardPage: FC<DashboardPageProps> = ({...rest}) => {
  return (
    <div>Dashboard</div>
  );
};

export default DashboardPage;