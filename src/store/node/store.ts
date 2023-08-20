import apiClient from 'api';
import { PalaceNode, NodeBody, NodeMedia } from 'types/node';
import { createApiEndpointStore } from '../base';

export const useNodeStore = createApiEndpointStore<PalaceNode>(
	'Palace Node',
	apiClient.nodes
);

export const useNodeBodyStore = createApiEndpointStore<NodeBody>(
	'Node Body',
	apiClient.bodies
);

export const useNodeMediaStore = createApiEndpointStore<NodeMedia>(
	'Node Media',
	apiClient.nodeMedia
);
