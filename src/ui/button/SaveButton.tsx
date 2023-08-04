import React, { FC } from 'react';
import { SaveOutlined } from '@ant-design/icons';

import Button from './Button';
import { ButtonProps } from './types';

const SaveButton: FC<ButtonProps> = ({ children, ...rest}) => {
  return (
    <Button
      icon={<SaveOutlined />}
      type="primary"
      {...rest}
    >
      { children }
    </Button>
  );
};

export default SaveButton;
