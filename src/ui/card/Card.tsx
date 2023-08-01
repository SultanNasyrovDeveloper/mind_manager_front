import React, { FC } from 'react';
import {
	Card as BaseCard,
	CardProps as BaseCardProps
} from 'antd';

export interface CardProps extends BaseCardProps {}

const Card: FC<CardProps> = (
	{ children, ...rest}
) => {
  return (
    <Card {...rest}>{ children }</Card>
  );
};

export default Card;