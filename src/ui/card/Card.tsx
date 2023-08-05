import { FC, ReactNode } from 'react';
import { Card as BaseCard, CardProps as BaseCardProps } from 'antd';
import styled from 'styled-components';
import { Row, Col, Divider } from '..';

export interface CardProps extends BaseCardProps {
	subtitle?: string | ReactNode;
	noBodyPadding?: boolean;
}

const StyledCard = styled<FC<CardProps>>(BaseCard)`
	.card-header {
		padding: 16px;
	}
	.card-header-divider {
		margin: 0;
	}
	.card-subtitle-container {
		padding: 8px 16px;
	}
	.ant-card-body {
    padding: 0;
  }
	.card-body {
    padding: ${props => props.noBodyPadding ? 0 : '16px'};
	}
	
	.card-extra-container {
		display: flex;
		justify-content: end;
	}
`;

const Card: FC<CardProps> = (
	{
		title,
		subtitle,
		extra,
		children,
		bodyStyle,
		...rest
	}
) => {
	return (
		<StyledCard {...rest}>
			<Row className="card-header">
				<Col span={18}>
					{title}
				</Col>
				<Col span={6} className="card-extra-container">
					{extra}
				</Col>
			</Row>
			<Divider className="card-header-divider" />
			{subtitle &&
        <Row className="card-subtitle-container">
          <Col span={24}>
	          {subtitle}
					</Col>
				</Row>
			}
			{children &&
        <div className="card-body" style={bodyStyle}>
	        {children}
				</div>
			}
		</StyledCard>
	);
}

export default Card;
