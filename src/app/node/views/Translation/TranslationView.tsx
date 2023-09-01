import React, { FC } from 'react';
import { TextEditor, Card } from 'ui';
import BodyActions from '../../components/BodyActions'
import { NodeViewProps } from '../../types';

export interface TranslationViewProps extends NodeViewProps {}

const TranslationView: FC<TranslationViewProps> = (
  { ...rest}
) => {
  return (
    <Card
      title="Translation"
      extra={
        <BodyActions
          hasChanged={false}
          onSave={() => {}}
        />
      }
    >
      <TextEditor />
      <TextEditor />
    </Card>
  );
};

export default TranslationView;