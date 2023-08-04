import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { default as authRoutes } from 'app/auth/routes';
import { default as dashboardRoutes } from 'app/dashboard/routes';
import { default as nodeRoutes } from 'app/node/routes';
import { default as homeRoutes } from 'app/home/routes';
import { default as palaceRoutes } from 'app/palace/routes';
import App from './App';

const routes: RouteObject[] = [
	...authRoutes,
	...homeRoutes,
	{
		element: <App />,
		path: '/',
		children: [
			...dashboardRoutes,
			...palaceRoutes,
			...nodeRoutes
		]
	}
];

const router = createBrowserRouter(routes);

export default router;