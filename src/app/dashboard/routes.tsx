import { RouteObject } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';

const routes: RouteObject[] = [
	{ path: '/dashboard', element: <DashboardPage /> }
];

export default routes;