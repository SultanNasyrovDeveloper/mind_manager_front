import React, { FC } from 'react';

import { buttonStyleFactory } from './styles';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({ type, ...props }) => {
  return buttonStyleFactory(type, props);
};

export default Button;
