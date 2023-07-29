import React, { FC } from 'react';
import {
	FormItem,
	Select,
	FormItemProps,
	SelectProps,
	OptionProps,
} from 'lib/form';

export interface QueueGenerationAlgoSelectProps
	extends Omit<FormItemProps, 'children'> {
	selectProps?: Omit<SelectProps, 'name' | 'children'>
}

const options: OptionProps[] = [
	{
		key: 'random',
		label: 'Random',
		value: 1
	},
	{
		key: 'outdated',
		label: 'Outdated first',
		value: 2
	}
];

const QueueGenerationAlgoSelect: FC<QueueGenerationAlgoSelectProps> = (
	{ name, selectProps, ...rest}
) => {
  return (
    <FormItem
	    name={name}
	    {...rest}
    >
	    <Select
		    name={name}
		    options={options}
		    {...selectProps}
	    />
    </FormItem>
  );
};

export default QueueGenerationAlgoSelect;