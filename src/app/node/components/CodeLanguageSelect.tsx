import React, { FC } from 'react';
import { Select } from 'antd';
import styled from 'styled-components';
import { CodeLanguageName } from 'ui/types';
import { useCodeLanguageOptions } from 'ui/code-editor';

const StyledSelect = styled(Select)`
  min-width: 120px;
`;

export interface CodeLanguageSelectProps {
  value: CodeLanguageName;
  onChange: (value: CodeLanguageName) => void;
}

const CodeLanguageSelect: FC<CodeLanguageSelectProps> = ({ value, onChange}) => {
  const options = useCodeLanguageOptions();

  return (
    <StyledSelect
      showSearch
      size="small"
      value={value}
      options={options}
      onSelect={(value) => onChange(value as CodeLanguageName)}
    />
  );
};

export default CodeLanguageSelect;
