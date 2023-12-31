import _ from 'lodash';
import { EndpointObjectState } from 'store/types';
import { CodeLanguageName } from 'ui/types';
import {PalaceNode, NodeBody, NodeAncestor, NodeMedia} from 'types/node';
import { DEFAULT_POSITION } from 'ui/chessboard';

export const getNodeAncestors = (
	state: EndpointObjectState<PalaceNode>
): NodeAncestor[] => _.get(state, 'detail.ancestors', []);

export const getNodeBodyType = (
	state: EndpointObjectState<PalaceNode>
): string => _.get(state, 'detail.body.type', 'text');

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

export const getFetchNodeMedia = (
	state: EndpointObjectState<NodeMedia>
): (nodeId: number) => Promise<NodeMedia[] | undefined> => {
	return async (nodeId: number) => {
		const queryParams = { node: nodeId };
		const [paginatedResult, error] =  await state.fetchList(queryParams);
		if (!error && paginatedResult) return paginatedResult.results;
		return undefined;
	};
}

export const getPhrase = (
	state: EndpointObjectState<NodeBody>
): string => _.get(state, 'detail.data.phrase', '<p><br></p>');

export const getTranslation = (
	state: EndpointObjectState<NodeBody>
): string => _.get(state, 'detail.data.translation', '<p><br></p>');