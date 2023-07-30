import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'ui';

export interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({...rest}) => {
	return (
		<Link to="/auth/login">
			<Button type="primary">Login</Button>
		</Link>
	);
}

export default HomePage;