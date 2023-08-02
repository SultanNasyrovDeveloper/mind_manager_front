import { Spin } from 'antd';
import styled from 'styled-components';

const PreloaderContainer = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Preloader = () => {
  return (
    <PreloaderContainer>
      <Spin />
    </PreloaderContainer>
  );
};

export default Preloader;
