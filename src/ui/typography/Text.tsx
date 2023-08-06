import React, { FC, ReactNode, CSSProperties } from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';
import { SizedComponent } from '../types';
import { TextLevel } from './types';
import { getDefaultTextColor } from './utils';

export interface TextProps extends SizedComponent {
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

export const sizeToPixel: Record<string, number> = {
  small: textLevelToPixels[5],
  middle: textLevelToPixels[3],
  large: textLevelToPixels[1],
}

const Text: FC<TextProps> = (
  { isHeader, isPointable, children, ...rest }
) => {
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
  font-size: ${props => props.size ? sizeToPixel[props.size] : textLevelToPixels[props.level || 3]}px;
  cursor: ${props => props.isPointable ? 'pointer' : 'Text'};
`;



export default StyledText;
