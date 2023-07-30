import React, { FC, useMemo } from 'react';
import { useNodeStore, getNodeBodyType, useNodeBodyStore} from 'storev2/node';
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
	const router = useRouter();
	const { id } = router.query;
	const nodeBodyType = useNodeBodyStore(state => state.detail?.type);
	const ViewComponent = useMemo(() => {
		if (nodeBodyType) return bodyTypeToViewMap[nodeBodyType as NodeBodyType];
		return DefaultView;
	}, [nodeBodyType]);
	
	return (
		<ViewComponent
			onNodeDetail={() => router.push(`palace/node/${id}`)}
			onNodeSubtree={() => router.push(`/palace/${id}`)}
		/>
	);
};

export default observer(View);