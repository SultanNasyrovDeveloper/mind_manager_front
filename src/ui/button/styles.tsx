import { FC } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import * as colors from '../colors';
import { ButtonProps, ButtonType } from './types';

export const DefaultButton: FC<ButtonProps> = styled(Button)`
  border: none;
  background-color: ${colors.grey.get(2)} !important;
  
  :hover {
    background-color: ${colors.grey.get(3)} !important;
    color: ${colors.blue.get(5)} !important;
  }
`;

export const PrimaryButton: FC<ButtonProps> = styled(Button)`
  border: none;
  background-color: ${props => !props.disabled ? colors.blue.get(5): colors.grey.get(2)} !important;
  color: ${props => props.disabled ? colors.grey.get(6) : colors.grey.get(1)} !important;
  :hover {
    background-color: ${props => !props.disabled ? colors.blue.get(6) : colors.grey.get(3)} !important;
  }
`;

export const TextButton: FC<ButtonProps> = styled(Button)``;

export const buttonStyleFactory = (
  type: ButtonType,
  props: ButtonProps
) => {
  switch (type) {
    case 'primary':
      return <PrimaryButton type={type} {...props} />
    case 'default':
      return <DefaultButton type={type} {...props} />
    case 'text':
      return <TextButton type={type} {...props} />;
    default:
      return <DefaultButton type={type} {...props} />
  }
}
