import React, { FC } from 'react';
import {
  Link as BaseLink,
  LinkProps as BaseLinkProps
} from 'react-router-dom';

export interface LinkProps extends BaseLinkProps {}

const Link: FC<LinkProps> = ({...rest}) => {
  return (
    <BaseLink {...rest} />
  );
};

export default Link;