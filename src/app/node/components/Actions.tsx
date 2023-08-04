import React, { FC, useMemo, useCallback } from 'react';
import _ from 'lodash';
import {
  NodeBody,
  NodeBodyType,
} from 'types';
import { Space, Button } from 'ui';
import { SizedComponent, CodeLanguageName} from 'ui/types';
import { SaveOutlined } from 'ui/icons';
import LanguageSelect from './CodeLanguageSelect';
import TypeSelect from './TypeSelect';

export interface INodeBodyActionsProps extends SizedComponent {
  body: NodeBody;
  isLoading?: boolean;
  hasChanged?: boolean;
  onSave?: () => void;
  onTypeChange?: (newType: NodeBodyType) => void;
  onLanguageChange?: (newLanguage: CodeLanguageName) => void;
}

const Actions: FC<INodeBodyActionsProps> = (
  {
    size = 'small',
    body,
    isLoading,
    hasChanged,
    onSave,
    onTypeChange,
    onLanguageChange
  }
) => {
  const language = useMemo(() => {
    return _.get(body, 'meta.language', 'javascript');
  }, [body]);
  
  const handleLanguageChange = useCallback((value: string) => {
    onLanguageChange && onLanguageChange(value as CodeLanguageName);
  }, [onLanguageChange]);
  const handleTypeChange = useCallback((value: string) => {
    onTypeChange && onTypeChange(value as NodeBodyType);
  }, [onTypeChange]);
  const handleSave = useCallback(() => {
    onSave && onSave();
  }, [onSave]);

  return (
    <Space size={size}>
      {body.type === 'code' &&
        <LanguageSelect
          value={language}
          onChange={handleLanguageChange}
        />
      }
      <TypeSelect
        value={body.type}
        onChange={handleTypeChange}
      />
      {onSave &&
        <Button
          type="primary"
          icon={<SaveOutlined />}
          size={size}
          disabled={!hasChanged}
          loading={isLoading}
          onClick={handleSave}
        >Save</Button>
      }
    </Space>
  );
};

export default Actions;
