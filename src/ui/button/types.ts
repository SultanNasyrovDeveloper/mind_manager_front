import { ButtonProps as BaseButtonProps } from 'antd';

export type ButtonType = 'default'
  | 'primary'
  | 'dashed'
  | 'link'
  | 'text'
  | undefined;

export interface ButtonProps extends BaseButtonProps {}
