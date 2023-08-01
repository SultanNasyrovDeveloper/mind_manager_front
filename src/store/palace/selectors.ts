import _ from 'lodash';
import { TreeNode } from 'types/palace';
import { PalaceStoreState } from './store';

export const getSubtreeChildren = (state: PalaceStoreState): TreeNode[] =>
	_.get(state, 'subtree.children', []);