import React, { FC, useState, useMemo } from 'react';
import _ from 'lodash';
import client from 'api';
import { useFormContext } from 'lib/form';
import useAsync from 'lib/hooks/useAsync';
import useDebounce from 'lib/hooks/useDebounce';
import { apiObjectToOption } from 'lib/utils/ui';
import { SelectItemProps } from 'ui';
import { SelectProps } from '..';
import SelectField, { SelectFieldProps } from './SelectField';

export type NodeSelectControlProps = Omit<SelectProps, 'name' | 'options' | 'searchValue' | 'onSearch' | 'loading' |  'showSearch'>;
export interface NodeSelectFieldProps
	extends Omit<SelectFieldProps, 'controlProps'> {
	controlProps?: NodeSelectControlProps;
}

const NodeSelectField: FC<NodeSelectFieldProps> = ({
		name,
		controlProps,
		...fieldProps
}) => {
	const { values, setFieldValue } = useFormContext();
	const [search, setSearch] = useState('');
	const [debouncedSearch, setDebouncedSearch] = useState('')
	const [isOptionsLoading, setIsOptionsLoading] = useState(false);
	const [options, setOptions] = useState<SelectItemProps[]>([]);
	const value = useMemo<number[]>(
		() => _.get(values, name, []),
		[values, name]
	);
	const selectProps = useMemo<NodeSelectControlProps>(() => ({
		...controlProps,
		options,
		// showSearch: true,
		loading: isOptionsLoading,
		onSearch: setSearch,
	}), [controlProps, options, isOptionsLoading, setSearch]);
	
	useDebounce(() => setDebouncedSearch(search), 500, [search]);
	useAsync(async () => {
		const query = { name: debouncedSearch, limit: 15 };
		const [paginatedResponse, error] = await client.nodes.list(query);
		if (!error && paginatedResponse)
			setOptions(paginatedResponse.results.map(apiObjectToOption));
	}, [debouncedSearch]);
	
  return (
    <SelectField
	    name={name}
	    controlProps={selectProps}
	    {...fieldProps}
    />
  );
};

export default NodeSelectField;