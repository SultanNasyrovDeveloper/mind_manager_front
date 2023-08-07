import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row } from 'ui';

export interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({...rest}) => {
	return (
		<Row style={{ height: '70vh' }} justify="center" align="middle">
			<Link to="/auth/login">
				<Button type="primary">Login</Button>
			</Link>
		</Row>
		
	);
}

export default HomePage;