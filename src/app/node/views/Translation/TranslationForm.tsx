import React, { FC } from 'react';
import Form, { FormProps } from 'lib/form';
import TextEditorField from 'lib/form/fields/TextEditorField';

export interface TranslationFormProps extends FormProps {

}

const TranslationForm: FC<TranslationFormProps> = (
  {...rest}
) => {
  return (
    <Form {...rest}>
      <TextEditorField
        name="phrase"
        label="Phrase"
      />
      <TextEditorField
        name="translation"
        label="Translation"
      />
    </Form>
  );
};

export default TranslationForm;