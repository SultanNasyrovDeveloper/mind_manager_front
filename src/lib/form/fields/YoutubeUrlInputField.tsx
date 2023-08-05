import React, { FC } from 'react';
import { YoutubePlayer, YoutubePlayerProps, InputProps } from 'ui';
import { FormItem, Input } from '..';
import { FormFieldProps } from '../types';

export interface YoutubeUrlInputFieldProps
	extends FormFieldProps<InputProps> {
		youtubePlayerConfig?: YoutubePlayerProps;
}

const YoutubeUrlInputField: FC<YoutubeUrlInputFieldProps> = (
	{
		name,
		youtubePlayerConfig,
		controlProps,
		...formItemProps
	}
) => {
  return (
		<>
			<FormItem name={name} {...formItemProps}>
				<Input name={name} {...controlProps} />
			</FormItem>
			<YoutubePlayer
				{...youtubePlayerConfig}
			/>
		</>
  );
};

export default YoutubeUrlInputField;