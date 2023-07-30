import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { default as authRoutes } from 'app/auth/routes';
import { default as dashboardRoutes } from 'app/dashboard/routes';
import { default as homeRoutes } from 'app/home/routes';
import App from './App';

const routes: RouteObject[] = [
	
	...authRoutes,
	...homeRoutes,
	{
		element: <App />,
		
		path: '/',
		children: [
			...dashboardRoutes
		]
	}
];

const router = createBrowserRouter(routes);

export default router;