import React, { FC, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Preloader from 'lib/components/Preloader';
import TwoColumnLayout from 'lib/components/TwoColumnLayout';
import useAsync from 'lib/hooks/useAsync';
import { useNodeStore, useNodeBodyStore } from 'store/node';
import { NodeBodyType, PalaceNode } from 'types/node';
import GeneralInfoCard from '../components/GeneralInfoCard';
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
	const node = useNodeStore(state => state.detail)
	const nodeBodyId = useNodeStore(state => state.detail?.body);
	const bodyId = useNodeBodyStore(state => state.detail?.id);
	const isBodyLoading = useNodeBodyStore(state => state.isDetailLoading);
	const nodeBodyType = useNodeBodyStore(state => state.detail?.type);
	const fetchBody = useNodeBodyStore(state => state.fetchDetail);
	const updateNode = useNodeStore(state => state.update);
	
	const ViewComponent = useMemo(() => {
		if (nodeBodyType) return bodyTypeToViewMap[nodeBodyType as NodeBodyType];
		return DefaultView;
	}, [nodeBodyType]);
	
	useAsync(async () => {
		if (nodeBodyId && bodyId !== nodeBodyId) await fetchBody(nodeBodyId);
	}, [nodeBodyId, bodyId]);
	
	return (
		<>
			{isBodyLoading && <Preloader />}
			{(!isBodyLoading && bodyId) &&
				<TwoColumnLayout
					first={
						<ViewComponent
							onNodeDetail={() => navigate(`palace/node/${pageQuery.nodeId}`)}
							onNodeSubtree={() => navigate(`/palace/${pageQuery.nodeId}`)}
						/>
					}
					second={
						<GeneralInfoCard
							node={node as PalaceNode}
							onNodePalaceClick={() => navigate(`/palace/${pageQuery.nodeId}`)}
							onUpdate={(updateData) => node && updateNode(node.id, updateData)}
						/>
					}
				/>
    
			}
		</>
	);
};

export default View;