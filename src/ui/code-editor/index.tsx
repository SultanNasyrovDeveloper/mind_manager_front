import React, { FC } from 'react';
import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';

export interface CodeEditorProps extends ReactCodeMirrorProps {}

export const CodeEditor: FC<CodeEditorProps> = (props) => {

  return (
    <CodeMirror
      placeholder="Enter some code..."
      {...props}
    />
  );
};

export default CodeEditor;
export * from './useCodeLanguages'
export * from './useCodeLanguageOptions'
