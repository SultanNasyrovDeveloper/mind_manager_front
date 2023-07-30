import { RouteObject } from 'react-router-dom';
import PalacePage from './pages/PalacePage';

const routes: RouteObject[] = [
	{
		path: '/palace/:id',
		element: <PalacePage />
	}
];

export default routes;