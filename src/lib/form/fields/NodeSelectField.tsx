import React, { FC, useState, useMemo } from 'react';
import _ from 'lodash';
import client from 'api';
import useAsync from 'lib/hooks/useAsync';
import useDebounce from 'lib/hooks/useDebounce';
import usePrevious from 'lib/hooks/usePrevoius';
import { apiObjectToOption } from 'lib/utils/ui';
import { SelectItemProps, notification } from 'ui';
import { SelectProps, useFormContext } from '..';
import SelectField, { SelectFieldProps } from './SelectField';

export interface NodeSelectFieldProps
	extends Omit<SelectFieldProps, 'controlProps'> {
	controlProps?: Omit<SelectProps<number>, 'name' | 'options' | 'searchValue' | 'onSearch' | 'loading'>;
}

const NodeSelectField: FC<NodeSelectFieldProps> = (
	{
		name,
		controlProps,
		...fieldProps
	}
) => {
	const { values } = useFormContext();
	const value = useMemo<number[]>(
		() => _.get(values, name, []),
		[values, name]
	);
	const previousValue = usePrevious<number[]>(value);
	const [search, setSearch] = useState('');
	const [isOptionsLoading, setIsOptionsLoading] = useState(false);
	const [options, setOptions] = useState<SelectItemProps[]>([]);
	
	useAsync(async () => {
		if (!value || value === previousValue) return;
		const valueAsArray = Number.isInteger(value) ? [value]: value;
		if (valueAsArray.length === 0) return;
		const optionIds = options.map(option => option.value);
		const idsWithNoOption = value.filter(id => !optionIds.includes(id));
		if (idsWithNoOption.length > 0) {
			const queryParams = { id_in: idsWithNoOption.join() }
			const [paginatedResult, error] = await client.nodes.list(queryParams);
			if (!error && paginatedResult) setOptions(prev => [
					...prev, ...paginatedResult.results.map(apiObjectToOption)
				]
			);
		}
	}, [value]);
	
	useDebounce(async () => {
		setIsOptionsLoading(true);
		const queryParams = { name: search, limit: 15 };
		const [paginatedResult, error] = await client.nodes.list(queryParams);
		if (!error && paginatedResult) {
			const valueOptions = options.filter(
				option => value.includes(option.value as number)
			);
			const apiOptions = paginatedResult.results.map(apiObjectToOption);
			setOptions([...valueOptions, ...apiOptions]);
		}
		if (error) notification.error({
			message: 'Unable to load node options',
			description: String(error)
		});
		setIsOptionsLoading(false);
	}, 700, [search]);
	
  return (
    <SelectField
	    name={name}
	    controlProps={{
				...controlProps,
		    loading: isOptionsLoading,
		    options: options,
		    onSearch: setSearch
	    }}
	    {...fieldProps}
    />
  );
};

export default NodeSelectField;