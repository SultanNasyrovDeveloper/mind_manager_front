import React, { FC, useState } from 'react';
import client from 'api';
import useAsync from 'lib/hooks/useAsync';
import useDebounce from 'lib/hooks/useDebounce';
import { apiObjectToOption } from 'lib/utils/ui';
import { SelectItemProps } from 'ui';
import { useField } from '../Field';
import SelectField, { SelectFieldProps } from './SelectField';

export interface NodeSelectFieldProps
  extends SelectFieldProps {}

const NodeSelectField: FC<NodeSelectFieldProps> = (
  { name, ...rest }
) => {
  const [{ value }] = useField(name);
  const [areOptionsLoading, setAreOptionsLoading] = useState(false);
  const [options, setOptions] = useState<SelectItemProps[]>([]);
  const [search, setSearch] = useState('');
  
  useDebounce(async () => {
    setAreOptionsLoading(true);
    const query = {
      name: search,
      id_not_in: Array.isArray(value) ? value.join(): '',
      limit: 15
    };
    const [paginatedResult, error] = await client.nodes.list(query);
    if (!error && paginatedResult) {
      setOptions(paginatedResult.results.map(apiObjectToOption));
    }
    setAreOptionsLoading(false);
  }, 300, [search]);
  
  useAsync(async () => {
    let valueAsArray = [];
    if (value && Array.isArray(value)) valueAsArray = value;
    if (value && Number.isInteger(value)) valueAsArray = [value];
    if (valueAsArray.length > 0) {
      const optionIds = options.map(option => option.value);
      const idsWithNoOption = valueAsArray.filter(
        nodeId => !optionIds.includes(nodeId)
      );
      if (idsWithNoOption.length === 0) return;
      const query = { id_in: idsWithNoOption.join() };
      const [paginatedResponse, error] = await client.nodes.list(query);
      if (!error && paginatedResponse) {
        setOptions(prev => [
          ...paginatedResponse.results.map(apiObjectToOption),
          ...prev
        ]);
      }
    }
  }, [value]);
  
  return (
    <SelectField
      showSearch
      name={name}
      loading={areOptionsLoading}
      options={[...options]}
      searchValue={search}
      filterOption={false}
      onSearch={setSearch}
      {...rest}
    />
  );
};

export default NodeSelectField;