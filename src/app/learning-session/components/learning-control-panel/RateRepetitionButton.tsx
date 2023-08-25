import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { NoReturn } from 'types/core';
import { RepetitionRating } from 'types/learningSession';
import { Button, ButtonProps, Rate } from 'ui';

export interface RateRepetitionButtonProps {
	onClick?: (rating: RepetitionRating) => NoReturn;
}

const StyledRateRepetitionButton = styled<FC<ButtonProps>>(Button)`
	padding: 0;
	
	.ant-rate:first-child {
		padding-left: 16px;
	}
  .ant-rate:last-child {
    padding-right: 16px;
  }
`;

const RateRepetitionButton: FC<RateRepetitionButtonProps> = (
	{ onClick, ...rest }
) => {
	
	const [rating, setRating] = useState(1);
	
  return (
    <StyledRateRepetitionButton
	    onClick={() => onClick && onClick(rating +  1 as RepetitionRating)}
    >
	    <Rate
		    defaultValue={1}
	      onChange={setRating}
	    />
		</StyledRateRepetitionButton>
  );
};

export default RateRepetitionButton;