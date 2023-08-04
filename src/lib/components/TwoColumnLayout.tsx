import React, { FC, ReactNode } from 'react';
import { Row, Col } from 'ui';

export interface TwoColumnLayoutProps {
	first: ReactNode;
	second: ReactNode;
}

const TwoColumnLayout: FC<TwoColumnLayoutProps> = (props) => {
	
	return (
		<Row>
			<Col span={24} lg={15} style={{ marginBottom: '8px' }}>{ props.first }</Col>
			<Col span={24} lg={9}>{ props.second }</Col>
		</Row>
	);
};

export default TwoColumnLayout;