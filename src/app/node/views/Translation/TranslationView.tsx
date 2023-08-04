import React, { FC } from 'react';
import TwoColumnLayout from 'lib/components/TwoColumnLayout';
import { TextEditor, Card } from 'ui';
import BodyActions from '../../components/BodyActions'
import { NodeViewProps } from '../../types';

export interface TranslationViewProps extends NodeViewProps {}

const TranslationView: FC<TranslationViewProps> = (
  { ...rest}
) => {
  return (
    <TwoColumnLayout
      first={
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
      }
      second="Detail"
    />
  );
};

export default TranslationView;