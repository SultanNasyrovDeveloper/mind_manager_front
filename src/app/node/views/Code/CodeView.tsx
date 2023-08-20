import React, { FC, useMemo, useState, useEffect } from 'react';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import Preloader from 'lib/components/Preloader';
import TwoColumnLayout from 'lib/components/TwoColumnLayout';
import {
	useNodeStore,
	useNodeBodyStore,
	getCodeLanguage,
	getCodeEditorContent
} from 'store/node';
import { PalaceNode } from 'types';
import { Card, CodeEditor } from 'ui';
import GeneralInfoCard from '../../components/GeneralInfoCard';
import BodyActions from '../../components/BodyActions';
import { NodeViewProps } from '../../types';

const CodeView: FC<NodeViewProps> = ({ onNodeSubtree}) => {
	const [editorContent, setEditorContent] = useState('');
	const node = useNodeStore(state => state.detail);
	const body = useNodeBodyStore(state => state.detail);
	const language = useNodeBodyStore(getCodeLanguage);
	const bodyEditorContent = useNodeBodyStore(getCodeEditorContent);
	const updateBody = useNodeBodyStore(state => state.update);
	const updateNode = useNodeStore(state => state.update);
	
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
	
	console.log(editorContent);
	
	return (
		<>
			{!body && <Preloader />}
			{body &&
				<TwoColumnLayout
          first={
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
								content={editorContent}
								height="75vh"
								// @ts-ignore
								extensions={extensions || []}
								onChange={setEditorContent}
							/>
						</Card>
					}
          second={
						<GeneralInfoCard
							node={node as PalaceNode}
							onNodePalaceClick={() => onNodeSubtree && onNodeSubtree()}
							onUpdate={(updateData) => node && updateNode(node.id, updateData)}
						/>
					}
				/>
			}
		</>
	);
};

export default CodeView;