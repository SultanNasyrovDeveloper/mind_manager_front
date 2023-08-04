import React, {
	FC,
	useState,
	useMemo,
	useEffect,
} from 'react';
import _ from 'lodash';
import TwoColumnLayout from 'lib/components/TwoColumnLayout';
import {
	useNodeStore,
	useNodeBodyStore,
	getTextEditorContent
} from 'store/node';
import { PalaceNode } from 'types';
import { TextEditor, Card } from 'ui';
import GeneralInfoCard from '../../components/GeneralInfoCard';
import BodyActions from '../../components/BodyActions';
import { NodeViewProps } from '../../types';

const TextView: FC<NodeViewProps> = ({ onNodeSubtree}) => {
	const [editorContent, setEditorContent] = useState('');
	const node = useNodeStore(state => state.detail);
	const body = useNodeBodyStore(state => state.detail);
	const bodyContent = useNodeBodyStore(getTextEditorContent);
	const updateBody = useNodeBodyStore(state => state.update);
	const updateNode = useNodeStore(state => state.update);

	const hasChanged = useMemo(
		() => !_.isEqual(editorContent, bodyContent),
		[editorContent, bodyContent]
	);
	useEffect(
		() => setEditorContent(bodyContent),
		[bodyContent]
	);
	
	return (
		<TwoColumnLayout
			first={
				<Card
					extra={
						<>
							{body &&
								<BodyActions
	                hasChanged={hasChanged}
									onSave={() => updateBody(
										body.id,
										{ data: { content: editorContent }}
									)}
								/>
							}
						</>
					}
				>
					<TextEditor
						height="75vh"
						toolbarPreset="full"
						value={editorContent}
						onChange={setEditorContent}
					/>
				</Card>
			}
			second={
				<>
					{node &&
            <GeneralInfoCard
              node={node as PalaceNode}
              onNodePalaceClick={() => onNodeSubtree && onNodeSubtree()}
              onUpdate={(updateData) => updateNode(
								node.id,
	              updateData
              )}
            />
					}
				</>
			}
		/>
	);
};

export default TextView;