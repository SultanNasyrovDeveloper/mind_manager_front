import React, { FC, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useAsync from 'lib/hooks/useAsync';
import { useNodeStore, useNodeBodyStore } from 'store/node';
import { NodeBodyType } from 'types';
import { NodeViewProps } from '../types';
import ChessView from './Chess/ChessView';
import TranslationView from './Translation/TranslationView';
import CodeView from './Code/CodeView';
import TextView from './Text/TextView';

const DefaultView: FC<NodeViewProps> = (props) => (
	<div>Undefined node type</div>
);

const bodyTypeToViewMap: Record<NodeBodyType, FC<NodeViewProps>> = {
	chess: ChessView,
	text: TextView,
	code: CodeView,
	translation: TranslationView
}

const View: FC = () => {
	const pageQuery = useParams();
	const navigate = useNavigate();
	const nodeBodyId = useNodeStore(state => state.detail?.body);
	const bodyId = useNodeBodyStore(state => state.id);
	const nodeBodyType = useNodeBodyStore(state => state.detail?.type);
	const fetchBody = useNodeBodyStore(state => state.fetchDetail);
	const ViewComponent = useMemo(() => {
		if (nodeBodyType) return bodyTypeToViewMap[nodeBodyType as NodeBodyType];
		return DefaultView;
	}, [nodeBodyType]);
	
	useAsync(async () => {
		if (nodeBodyId && bodyId !== nodeBodyId) await fetchBody(nodeBodyId);
	}, [nodeBodyId, bodyId]);
	
	return (
		<ViewComponent
			onNodeDetail={() => navigate(`palace/node/${pageQuery.nodeId}`)}
			onNodeSubtree={() => navigate(`/palace/${pageQuery.nodeId}`)}
		/>
	);
};

export default View;