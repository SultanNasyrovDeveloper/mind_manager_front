import React, { FC, ReactNode, useMemo } from 'react';
import {
	Card as BaseCard,
	CardProps as BaseCardProps
} from 'antd';
import styled from 'styled-components';
import { Row } from '..';

export interface CardProps extends BaseCardProps {
	subtitle?: ReactNode;
}

const StyledBaseCard = styled(BaseCard)`
	.ant-card-head {
		padding: 0 16px;
	}
	
	.ant-card-body {
		padding: 16px;
	}
`;

const Card: FC<CardProps> = ({ subtitle, children, ...rest}) => {
	const cardChildren = useMemo(() => {
		if (subtitle || children) return (
			<>
				{subtitle && <Row>{ subtitle } </Row>}
				{children}
			</>
		);
		return undefined;
	}, [subtitle, children]);
	
  return (
		<StyledBaseCard {...rest} >
			{ cardChildren }
		</StyledBaseCard>
  );
};

export default Card;