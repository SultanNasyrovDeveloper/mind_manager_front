import React, { FC } from 'react';
import { NodeBodyType } from 'types/node';
import {
  useNodeBodyStore,
  getCodeLanguage
} from 'store/node';
import { Space, Button } from 'ui';
import { SaveOutlined } from 'ui/icons';
import { SizedComponent, CodeLanguageName } from 'ui/types';
import LanguageSelect from './CodeLanguageSelect';
import TypeSelect from './TypeSelect';

export interface NodeBodyActionsProps extends SizedComponent {
  hasChanged?: boolean;
  onSave?: () => void;
}

const Actions: FC<NodeBodyActionsProps> = (
  { size = 'middle', hasChanged, onSave }
) => {
  const body = useNodeBodyStore(state => state.detail);
  const isBodyUpdating = useNodeBodyStore(state => state.isDetailUpdating);
  const updateBody = useNodeBodyStore(state => state.update);
  const programmingLanguage = useNodeBodyStore(getCodeLanguage);
  return (
    <>
      {body &&
        <Space size={size}>
          {body?.type === 'code' &&
            <LanguageSelect
              value={programmingLanguage}
              onChange={(newLanguage: CodeLanguageName) => updateBody(body.id, {
                meta: { language: newLanguage }
              })}
            />
          }
          <TypeSelect
            value={body?.type || 'text'}
            onChange={(newType: NodeBodyType) => updateBody(body?.id, {
              type: newType
            })}
          />
          <Button
            type="primary"
            icon={<SaveOutlined />}
            disabled={!hasChanged}
            loading={isBodyUpdating}
            onClick={() => onSave && onSave()}
          >Save</Button>
        </Space>
      }
    </>
    
  );
};

export default Actions;
