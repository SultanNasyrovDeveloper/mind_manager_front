import React, { FC, Ref, useRef, useMemo } from 'react';
import ReactQuill from 'react-quill';
import styled from 'styled-components';
import { ToolbarPresetName } from './types';
import { getToolbarPreset } from './toolbars';

import 'react-quill/dist/quill.snow.css'

export interface TextEditorProps
	extends ReactQuill.ReactQuillProps {
	height?: string;
	defaultReadOnly?: boolean;
	toolbarPreset?: ToolbarPresetName,
}

const StyledQuillEditor = styled(ReactQuill)`
	.ql-container {
		height: ${(props: TextEditorProps) => props.height || '30vh'}
	}
`;

const TextEditor: FC<TextEditorProps> = (
	{
		toolbarPreset= 'small',
		modules = {},
		...rest
	}
) => {
	const editorNodeRef = useRef(null);
	const editorModules = useMemo(() => {
		return {
			toolbar: getToolbarPreset(toolbarPreset),
			...modules
		};
	}, [modules, toolbarPreset]);
	
	return (
		<StyledQuillEditor
			ref={editorNodeRef}
			modules={editorModules}
			preserveWhitespace={true}
			{...rest}
		/>
	);
};

export default TextEditor;