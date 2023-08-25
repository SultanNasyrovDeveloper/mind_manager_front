import React, { FC, useState } from 'react';
import { NoReturn } from 'types/core';
import { RepetitionRating } from 'types/learningSession';
import { Button, Rate } from 'ui';

export interface RateRepetitionButtonProps {
	onClick?: (rating: RepetitionRating) => NoReturn;
}

const RateRepetitionButton: FC<RateRepetitionButtonProps> = (
	{ onClick, ...rest }
) => {
	
	const [rating, setRating] = useState(1);
	
  return (
    <Button
	    onClick={() => onClick && onClick(rating +  1 as RepetitionRating)}
    >
	    <Rate
		    defaultValue={1}
	      onChange={setRating}
	    />
		</Button>
  );
};

export default RateRepetitionButton;