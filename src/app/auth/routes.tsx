import { RouteObject } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

const routes: RouteObject[] = [
	{
		path: 'auth/login',
		element: <LoginPage />
	}
];

export default routes;