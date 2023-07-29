import React, { FC, useState, useMemo } from 'react';
import _ from 'lodash';
import client from 'api';
import {
  FormItem,
  Select,
  FormItemProps,
  SelectProps,
  OptionProps,
  useFormContext
} from 'lib/form';
import { toSelectOption } from 'lib/form/utils';
import useAsync from 'lib/hooks/useAsync';
import useDebounce from 'lib/hooks/useDebounce';
import { QueryParams } from 'types/api';

export interface NodeSelectProps
  extends Omit<FormItemProps, 'children'> {
  selectProps?: Omit<SelectProps, 'name'>;
}

const NodeSelect: FC<NodeSelectProps> = ({
  selectProps = {},
  name,
  ...rest
}) => {
  const [search, setSearch] = useState('');
  const [options, setOptions] = useState<OptionProps[]>([]);
  const [isOptionsLoading, setIsOptionsLoading] = useState(false);
  const { values } = useFormContext();
  const value = useMemo<number[]>(
    () => _.get(values, name, []),
    [values, name]
  );
  
  const [query, setQuery] = useState<QueryParams>({});
  useDebounce(
    () => setQuery({ name: search, limit: 15 }),
    500,
    [search]
  );
  
  useAsync(async () => {
    setIsOptionsLoading(true);
    const [paginatedResult, error] = await client.nodes.list(query);
    if (!error && paginatedResult) {
      const newOptions = paginatedResult.results.map(
        node => toSelectOption(node)
      );
      setIsOptionsLoading(false);
      setOptions(newOptions);
    }
  }, [query, setOptions]);
  
  useAsync(async () => {
    const idsWithOption = options
      .filter((option: OptionProps) => value.includes(option.value as number))
      .map(option => option.value);
    const idsWithNoOption = _.difference(value, idsWithOption);
    if (idsWithNoOption.length > 0) {
      const [paginatedResult, error] = await client.nodes.list({
        id_in: idsWithNoOption.join()
      });
      if (!error && paginatedResult) {
        setOptions(
          prev => [
            ...prev,
            ...paginatedResult.results.map(
              (node) => toSelectOption(node, { disabled: true })
            )
          ]
        );
      }
    }
  }, [value, options, setOptions]);
  
  return (
    <FormItem name={name} {...rest}>
      <Select
        allowClear
        showSearch
        filterOption={false}
        loading={isOptionsLoading}
        name={name}
        searchValue={search}
        options={options}
        onSearch={setSearch}
        {...selectProps}
      />
    </FormItem>
  );
};

export default NodeSelect;