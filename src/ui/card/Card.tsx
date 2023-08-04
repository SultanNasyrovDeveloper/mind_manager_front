import React, { FC } from 'react';
import { Card as BaseCard, CardProps } from 'antd';
import styled from 'styled-components';

export interface ICardProps extends CardProps {}

const StyledCard = styled(BaseCard)`
  .ant-card-head {
    padding: 0 16px;
  }
  
  .ant-card-body {
    padding: 16px;
  }
`;

export default StyledCard;
