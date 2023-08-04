import React, { FC } from 'react';
import { FormItem } from 'lib/form';
import { TextEditor, TextEditorProps } from 'ui/text-editor';
import { FormFieldProps } from '../types';

export interface TextEditorFieldProps
  extends FormFieldProps<TextEditorProps> {}

const TextEditorField: FC<TextEditorFieldProps> = (
  { name, controlProps, ...rest}
) => {
  return (
    <FormItem name={name} {...rest}>
      <TextEditor
        {...controlProps}
      />
    </FormItem>
  );
};

export default TextEditorField;