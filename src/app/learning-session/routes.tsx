import { RouteObject } from 'react-router-dom';
import LearningSessionListPage from './pages/LearningSessionListPage';

const routes: RouteObject[] = [
	{
		path: '/learning/sessions',
		element: <LearningSessionListPage />
	}
];

export default routes;