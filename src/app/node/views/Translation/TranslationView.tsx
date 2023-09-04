import React, { FC, useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { FormManagerProps } from 'lib/form';
import { useNodeBodyStore, getPhrase, getTranslation } from 'store/node';
import { TextEditor, Card } from 'ui';
import BodyActions from '../../components/BodyActions'
import { NodeViewProps } from '../../types';
import TranslationForm from './TranslationForm';

export interface TranslationFormData {
  phrase: string;
  translation: string;
}

export interface TranslationViewProps extends NodeViewProps {}

const TranslationView: FC<TranslationViewProps> = (
  { ...rest}
) => {
  const translationFormRef = useRef<FormManagerProps<any>>(null);
  const [hasChanged, setHasChanged] = useState(false);
  const bodyId = useNodeBodyStore(state => state.id);
  const bodyPhrase = useNodeBodyStore(getPhrase);
  const bodyTranslation = useNodeBodyStore(getTranslation);
  const updateBody = useNodeBodyStore(state => state.update);
  
  const initialValues = useMemo(() => ({
    phrase: bodyPhrase,
    translation: bodyTranslation
  }), [bodyPhrase, bodyTranslation]);
  
  const handleSave = useCallback(async (data: TranslationFormData) => {
    if (bodyId && translationFormRef)
      await updateBody(
        bodyId,
        { data: data }
      );
  }, [bodyId, translationFormRef, updateBody]);
  
  return (
    <Card
      title="Translation"
      extra={
        <BodyActions
          hasChanged={hasChanged}
          onSave={() => translationFormRef.current?.submitForm()}
        />
      }
    >
      <TranslationForm
        initialValues={initialValues}
        innerRef={translationFormRef}
        innerFormProps={{ layout: 'vertical' }}
        onHasChanged={setHasChanged}
        onSubmit={handleSave}
      />
    </Card>
  );
};

export default TranslationView;