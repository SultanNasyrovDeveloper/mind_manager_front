import React, { FC } from 'react';
import {
  Link as BaseLink,
  LinkProps as BaseLinkProps
} from 'react-router-dom';

export interface LinkProps extends BaseLinkProps {}

export const Link: FC<LinkProps> = ({...rest}) => {
  return (
    <BaseLink {...rest} />
  );
};
