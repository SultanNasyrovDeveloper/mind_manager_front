import { FC, ReactNode } from 'react';
import { Card as BaseCard, CardProps as BaseCardProps } from 'antd';
import styled from 'styled-components';
import { Row, Col, Divider } from '..';

export interface CardProps extends BaseCardProps {
	subtitle?: string | ReactNode;
	noBodyPadding?: boolean;
	footer?: string | ReactNode;
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
    padding: ${props => props.noBodyPadding ? 0 : '8px 16px'};
	}
	
	.card-extra-container {
		display: flex;
		justify-content: end;
	}
	
	.card-footer-container {
		padding: 16px;
	}
`;

const Card: FC<CardProps> = (
	{
		title,
		subtitle,
		footer,
		extra,
		children,
		headStyle,
		bodyStyle,
		noBodyPadding,
		...rest
	}
) => {
	return (
		<StyledCard noBodyPadding={noBodyPadding} {...rest}>
			{(title || extra) &&
        <Row className="card-header" style={headStyle}>
		      <Col span={18}>{title}</Col>
		      <Col span={6} className="card-extra-container">
			      {extra}
					</Col>
				</Row>
			}
			{subtitle &&
				<>
          <Divider className="card-header-divider" />
          <Row className="card-subtitle-container">
		        <Col span={24}>{subtitle}</Col>
					</Row>
				</>
			}
			{children &&
        <div className="card-body" style={bodyStyle}>
	        {children}
				</div>
			}
			{footer &&
				<Row>
					<Col span={24} className="card-footer-container">{ footer }</Col>
				</Row>
			}
		</StyledCard>
	);
}

export default Card;
