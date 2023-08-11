import React, { FC } from 'react';
import { SelectItemProps } from 'ui';
import SelectField, { SelectFieldProps } from 'lib/form/fields/SelectField';

export interface QueueGenerationStrategySelectProps
	extends SelectFieldProps<number> {}

const QUEUE_GENERATION_STRATEGY_OPTIONS: SelectItemProps[] = [
	{ key: 'random', label: 'Random', value: 1 },
	{ key: 'outdated', label: 'Outdated First', value: 2 },
];

const QueueGenerationStrategySelect: FC<QueueGenerationStrategySelectProps> = (
	{ name, ...fieldProps }
) => {
  return (
		<SelectField
			name={name}
			options={QUEUE_GENERATION_STRATEGY_OPTIONS}
			{...fieldProps}
		/>
  );
};

export default QueueGenerationStrategySelect;