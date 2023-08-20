import React, { FC, useEffect } from 'react';
import { YoutubePlayer, YoutubePlayerProps } from 'ui';
import { useField } from '../Field';
import InputField, { InputFieldProps } from './InputField';

export interface YoutubeVideoInputProps extends InputFieldProps {
	playerProps?: YoutubePlayerProps;
}

const YoutubeVideoInput: FC<YoutubeVideoInputProps> = (
	{ name, playerProps, ...fieldProps }
) => {
	const [{ value }, meta, helpers] = useField(name);
  return (
    <>
      <InputField
	      name={name}
	      placeholder="Enter video url or id..."
	      {...fieldProps}
      />
	    <YoutubePlayer {...playerProps} />
    </>
  );
};

export default YoutubeVideoInput;