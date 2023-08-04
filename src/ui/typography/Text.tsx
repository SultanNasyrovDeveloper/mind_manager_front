import React, { FC, ReactNode, CSSProperties } from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

import { TextLevel } from './types';
import { getDefaultTextColor } from './utils';

export interface ITextProps {
  color?: string;
  children?: ReactNode;
  level?: TextLevel;
  isHeader?: boolean;
  isPointable?: boolean;
  style?: CSSProperties
}

export const textLevelToPixels: Record<TextLevel, number> = {
  1: 18, 2: 16, 3: 14, 4: 12, 5: 10
};

const Text: FC<ITextProps> = ({ isHeader, children, ...rest }) => {
  return (
    <>
      {isHeader &&
        <Typography.Title {...rest}>
          { children }
        </Typography.Title>
      }
      {!isHeader &&
        <Typography.Text {...rest}>
          { children }
        </Typography.Text>
      }
    </>
  );
};

const StyledText = styled(Text)`
  color: ${props => props.color || getDefaultTextColor(props.level || 3)}!important;
  font-size: ${props => textLevelToPixels[props.level || 3]}px;
  cursor: ${props => props.isPointable ? 'pointer' : 'Text'};
`;



export default StyledText;
