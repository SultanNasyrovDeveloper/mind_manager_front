import React, {
	FC,
	useState,
	useMemo,
	useEffect,
} from 'react';
import _ from 'lodash';
import {
	useNodeBodyStore,
	getTextEditorContent
} from 'store/node';
import { TextEditor, Card } from 'ui';
import BodyActions from '../../components/BodyActions';
import { NodeViewProps } from '../../types';

const TextView: FC<NodeViewProps> = ({ onNodeSubtree}) => {
	const [editorContent, setEditorContent] = useState('');
	const body = useNodeBodyStore(state => state.detail);
	const bodyContent = useNodeBodyStore(getTextEditorContent);
	const updateBody = useNodeBodyStore(state => state.update);

	const hasChanged = useMemo(
		() => !_.isEqual(editorContent, bodyContent),
		[editorContent, bodyContent]
	);
	useEffect(
		() => setEditorContent(bodyContent),
		[bodyContent]
	);
	
	return (
		<Card
			title="Text Editor"
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
	);
};

export default TextView;