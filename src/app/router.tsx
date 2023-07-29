import { RouteObject, createBrowserRouter } from 'react-router-dom';
import LoginPage from 'app/auth/pages/LoginPage';
import App from './App';

const routes: RouteObject[] = [
	{
		element: <App />,
		path: '/',
		children: [
			{
				path: '/auth/login',
				element: <LoginPage />
			}
		]
	}
];

const router = createBrowserRouter(routes);

export default router;