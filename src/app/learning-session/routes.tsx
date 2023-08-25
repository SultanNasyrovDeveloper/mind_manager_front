import { RouteObject } from 'react-router-dom';
import FinishLearningSessionPage from './pages/FinishLearningSessionPage';
import LearningSessionListPage from './pages/LearningSessionListPage';
import RepeatedNodePage from './pages/RepeatedNodePage';

const routes: RouteObject[] = [
	{
		path: '/learning/sessions',
		element: <LearningSessionListPage />
	},
	{
		path: 'learning/node/current',
		element: <RepeatedNodePage />
	},
	{
		path: 'learning/session/finish',
		element: <FinishLearningSessionPage />
	}
];

export default routes;