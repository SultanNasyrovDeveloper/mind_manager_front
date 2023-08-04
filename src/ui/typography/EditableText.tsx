import React, { FC } from 'react';
import { Input } from 'antd';
import _ from 'lodash';
import styled from 'styled-components';

import Text, { TextProps } from './Text';

export interface IEditableTextProps extends Omit<TextProps, 'children'> {
  value: string;
  isEditing?: boolean;
  length?: number;
  maxLength?: number;
  onBlur?: () => void;
  onChange?: () => void;
}

const FullWidthInput = styled(Input)`
  width: 100%;
`;

const EditableText: FC<IEditableTextProps> = (
  { value, length, isEditing, onBlur, onChange, ...rest }

) => {
  return (
    <>
      {!isEditing &&
        <Text {...rest}>
          { length ? _.truncate(value, { length }) : value }
        </Text>
      }
      {isEditing &&
        <FullWidthInput
          autoFocus
          defaultValue={value}
          onBlur={onBlur}
          onChange={onChange}
        />
      }
    </>
  );
};

export default EditableText;
