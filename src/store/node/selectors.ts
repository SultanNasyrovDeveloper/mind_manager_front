import _ from 'lodash';
import { EndpointObjectState } from 'store/types';
import { CodeLanguageName } from 'ui/types';
import { PalaceNode, NodeBody, NodeAncestor } from 'types/node';
import { DEFAULT_POSITION } from 'ui/chessboard';

export const getNodeAncestors = (
	state: EndpointObjectState<PalaceNode>
): NodeAncestor[] => _.get(state, 'detail.ancestors', []);

export const getNodeBodyType = (
	state: EndpointObjectState<PalaceNode>
): string => _.get(state, 'detail.body.type', '');

export const getTextEditorContent = (
	state: EndpointObjectState<NodeBody>
): string => _.get(state, 'detail.data.content', '<p><br></p>');

export const getCodeEditorContent = (
	state: EndpointObjectState<NodeBody>
): string => _.get(state, 'detail.data.content', '');

export const getCodeLanguage = (
	state: EndpointObjectState<NodeBody>
): CodeLanguageName => _.get(
	state,
	'detail.meta.language',
	'typescript'
);

export const getBodyChessPosition = (
	state: EndpointObjectState<NodeBody>
): string => _.get(
	state, 'detail.meta.position', DEFAULT_POSITION
);

export const getBodyChessOrientation = (
	state: EndpointObjectState<NodeBody>
): string => _.get(state, 'detail.meta.orientation', 'white');