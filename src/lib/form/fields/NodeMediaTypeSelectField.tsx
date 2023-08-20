import React, { FC } from 'react';
import { SelectItemProps } from 'ui';
import SelectField, { SelectFieldProps } from './SelectField';

export interface NodeMediaTypeSelectFieldProps
 extends SelectFieldProps {

}

const MEDIA_TYPES: SelectItemProps[] = [
	{ key: 'not_set', value: 1, label: 'Not Set'},
	{ key: 'youtube', value: 2, label: 'Youtube' }
];

const NodeMediaTypeSelectField: FC<NodeMediaTypeSelectFieldProps> = (
	{...fieldProps}
) => {
  return (
    <SelectField
	    options={MEDIA_TYPES}
	    {...fieldProps}
    />
  );
};

export default NodeMediaTypeSelectField;