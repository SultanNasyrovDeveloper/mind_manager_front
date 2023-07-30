import React, { FC, useMemo, useState, useEffect } from 'react';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import { TwoColumnLayout, Preloader } from 'core';
import {
	useNodeStore,
	useNodeBodyStore,
	getCodeLanguage,
	getCodeEditorContent
} from 'storev2/node';
import { NodeBody, PalaceNode } from 'types';
import { Card, CodeEditor } from 'ui';
import { GeneralInfoCard } from '../../components';
import BodyActions from '../../components/Actions';
import { NodeViewProps } from '../../types';

const CodeView: FC<NodeViewProps> = ({ onNodeSubtree}) => {
	const [editorContent, setEditorContent] = useState('');
	const node = useNodeStore(state => state.detail);
	const body = useNodeBodyStore(state => state.detail);
	const isBodyLoading = useNodeBodyStore(state => state.isDetailLoading);
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
	
	return (
		<>
			{!body && <Preloader />}
			{body &&
				<TwoColumnLayout
          first={
						<Card
							bodyStyle={{ padding: '0 default' }}
							extra={
								<>
									{body &&
										<BodyActions
	                    isLoading={isBodyLoading}
	                    body={body as NodeBody}
	                    hasChanged={hasChanged}
	                    onTypeChange={(newValue) => updateBody(body.id, { type: newValue})}
	                    onLanguageChange={(newLanguage) => updateBody(
												body.id,
		                    { meta: { language: newLanguage }}
	                    )}
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
								onChange={setEditorContent}
								extensions={extensions}
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