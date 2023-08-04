import { RouteObject } from 'react-router-dom';
import NodePage from './pages/NodePage';

const routes: RouteObject[] = [
	{
		path: '/palace/node/:nodeId',
		element: <NodePage />
	}
];

export default routes;