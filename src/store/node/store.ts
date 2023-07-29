import apiClient from 'api';
import { PalaceNode, NodeBody } from 'types/node';
import { createApiEndpointStore } from '../base';

export const useNodeStore = createApiEndpointStore<PalaceNode>(
	'Palace Node',
	apiClient.nodes
);

export const useNodeBodyStore = createApiEndpointStore<NodeBody>(
	'Node Body',
	apiClient.bodies
);
