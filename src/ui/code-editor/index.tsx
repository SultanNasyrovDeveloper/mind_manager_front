import React, { FC } from 'react';
import CodeMirror from '@uiw/react-codemirror';

export interface ICodeEditorProps {
  content: string;
  onChange: (value: string) => void;
  height?: string;
  extensions?: any[];
}

export const CodeEditor: FC<ICodeEditorProps> = (props) => {
  const { content, height, extensions, onChange } = props;

  return (
    <CodeMirror
      value={content}
      height={height || '100%'}
      onChange={(value, viewUpdate) => onChange(value)}
      extensions={extensions || []}
    />
  );
};

export default CodeEditor;
export * from './useCodeLanguages'
export * from './useCodeLanguageOptions'
