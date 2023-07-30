import React, { FC, CSSProperties } from 'react';
import styled from 'styled-components';
import { Spin } from 'ui';

export interface PreloaderProps {
	style?: CSSProperties;
}

const PreloaderBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%
`;

const Preloader: FC<PreloaderProps> = ({ style }) => {
	return (
		<PreloaderBox style={style}>
			<Spin />
		</PreloaderBox>
	);
};

export default Preloader;