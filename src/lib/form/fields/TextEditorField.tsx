import React, { FC } from 'react';
import { TextEditor, TextEditorProps } from 'ui';
import Field, { useField, FormFieldProps } from '../Field';

export interface TextEditorFieldProps
	extends FormFieldProps, Omit<TextEditorProps, 'value' | 'onChange' | 'onBlur'> {

}

const TextEditorField: FC<TextEditorFieldProps> = (
	{ name, label, hidden, help, ...rest }
) => {
	const [{ value }, , { setValue }] = useField(name);
	
	return (
    <Field name={name} label={label} hidden={hidden} help={help}>
			<TextEditor
				{...rest}
				value={value}
				onChange={(value) => setValue(value)}
			/>
		</Field>
  );
};

export default TextEditorField;