import React, { FC, useState, useMemo } from 'react';
import _ from 'lodash';
import client from 'api';
import useAsync from 'lib/hooks/useAsync';
import useDebounce from 'lib/hooks/useDebounce';
import { apiObjectToOption } from 'lib/utils/ui';
import { SelectItemProps, notification } from 'ui';
import { SelectProps, useFormContext } from '..';
import SelectField, { SelectFieldProps } from './SelectField';

export interface NodeSelectFieldProps
	extends Omit<SelectFieldProps, 'controlProps'> {
	controlProps?: Omit<
		SelectProps<number>,
		'name' | 'options' | 'searchValue' | 'onSearch' | 'loading'
	>;
}

const NodeSelectField: FC<NodeSelectFieldProps> = (
	{ name, controlProps, ...fieldProps}
) => {
	const { values } = useFormContext();
	const value = useMemo<number[]>(
		() => _.get(values, name, []),
		[values, name]
	);
	const [search, setSearch] = useState('');
	const [isOptionsLoading, setIsOptionsLoading] = useState(false);
	const [options, setOptions] = useState<SelectItemProps[]>([]);
	
	useAsync(async () => {
		if (value && value.length > 0) {
			const optionIds = options.map(option => option.value);
			const idsWithNoOption = value.filter(id => !optionIds.includes(id));
			if (idsWithNoOption) {
				const queryParams = { id_in: idsWithNoOption.join() }
				const [paginatedResult, error] = await client.nodes.list(queryParams);
				if (!error && paginatedResult) setOptions(
					paginatedResult.results.map(apiObjectToOption)
				);
			}
		}
	}, [search]);
	
	useDebounce(async () => {
		setIsOptionsLoading(true);
		const queryParams = { name: search, limit: 15 };
		const [paginatedResult, error] = await client.nodes.list(queryParams);
		if (!error && paginatedResult) setOptions(
			paginatedResult.results.map(node => apiObjectToOption(node))
		);
		if (error) notification.error({
			message: 'Unable to load node options',
			description: String(error)
		})
		setIsOptionsLoading(false);
	}, 500, [search]);
  return (
    <SelectField
	    name={name}
	    controlProps={{
				allowClear: true,
				mode: 'multiple',
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