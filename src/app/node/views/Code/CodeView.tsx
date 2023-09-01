import React, { FC, useMemo, useState, useEffect } from 'react';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import Preloader from 'lib/components/Preloader';
import {
	useNodeBodyStore,
	getCodeLanguage,
	getCodeEditorContent
} from 'store/node';
import { Card, CodeEditor } from 'ui';
import BodyActions from '../../components/BodyActions';
import { NodeViewProps } from '../../types';

const CodeView: FC<NodeViewProps> = ({ onNodeSubtree}) => {
	const [editorContent, setEditorContent] = useState('');
	const body = useNodeBodyStore(state => state.detail);
	const language = useNodeBodyStore(getCodeLanguage);
	const bodyEditorContent = useNodeBodyStore(getCodeEditorContent);
	const updateBody = useNodeBodyStore(state => state.update);
	
	const extensions = useMemo(
			// @ts-ignore
		() => language ? [loadLanguage(language)] : [],
		[language]
	);
	const hasChanged = useMemo(
		() => bodyEditorContent !== editorContent,
		[bodyEditorContent, editorContent]
	);
	useEffect(
		() => setEditorContent(bodyEditorContent),
		[bodyEditorContent]
	);
	
	return (
		<>
			{!body && <Preloader />}
			{body &&
        <Card
          title="Code Editor"
          bodyStyle={{ padding: '0 default' }}
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
		        <CodeEditor
				      value={editorContent}
				      height="75vh"
			        // @ts-ignore
				      extensions={extensions || []}
				      onChange={setEditorContent}
		        />
				</Card>
			}
		</>
	);
};

export default CodeView;