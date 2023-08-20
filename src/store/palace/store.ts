import apiClient from 'api';
import { PalaceApiClient } from 'api/endpoints/palace';
import { Identifier } from 'types/core';
import { TreeNode } from 'types/palace';
import { PalaceNode } from 'types/node';
import { notification } from 'ui';
import { createApiEndpointStore } from '../base';
import { EndpointObjectState } from '../types';
import { findNodeAndMap } from './utils';

export interface PalaceStoreState extends EndpointObjectState<TreeNode> {
	subtree: TreeNode | undefined;
	isSubtreeLoading: boolean;
	get subtreeRootId(): number | undefined;
	addNode(node: PalaceNode | TreeNode): void;
	removeNode(node: PalaceNode | TreeNode): void,
	fetchSubtree(root: Identifier): Promise<TreeNode | undefined>;
}

export const usePalaceStore = createApiEndpointStore<
	TreeNode,
	PalaceApiClient,
	PalaceStoreState
	>(
	'Mind Palace',
	apiClient.palaces,
	(client: PalaceApiClient, set, get) => ({
		subtree: undefined,
		isSubtreeLoading: false,
		get subtreeRootId() {
			return this.subtree ? this.subtree.id : undefined;
		},
		addNode(node: TreeNode | PalaceNode) {
			const subtree = get().subtree;
			if (!subtree) return;
			findNodeAndMap(
				subtree,
				(treeNode) => treeNode.id === node.parent,
				(treeNode) => {
					treeNode.children = [...treeNode.children, node as TreeNode];
				}
			);
			set({ subtree });
		},
		removeNode(node: TreeNode | PalaceNode) {
			const subtree = get().subtree;
			if (!subtree) return;
			findNodeAndMap(
				subtree,
				(treeNode) => treeNode.id === node.parent,
				(treeNode) =>
					treeNode.children = treeNode.children.filter(child => child.id !== node.id)
			);
			set({ subtree });
		},
		
		async fetchSubtree(root: Identifier): Promise<TreeNode | undefined> {
			set({ isSubtreeLoading: true });
			const [subtree, error] = await client.getTree(root);
			set({ subtree, isSubtreeLoading: false });
			if (error) notification.error({
				message: get().name,
				description: 'Failed to load subtree data. ' + String(error)
			});
			return subtree;
		},
	})
);