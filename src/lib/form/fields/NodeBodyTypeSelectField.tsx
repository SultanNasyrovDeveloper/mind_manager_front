import React, { FC } from 'react';
import useNodeBodyTypes from 'app/node/hooks/useNodeBodyTypes';
import { FormFieldProps, FormItem, Select, SelectProps } from '..';

export interface NodeBodyTypeSelectFieldProps
	extends FormFieldProps<Omit<SelectProps, 'name'>> {}

const NodeBodyTypeSelectField: FC<NodeBodyTypeSelectFieldProps> = (
	{ name, controlProps, ...formItemProps }
) => {
	const options = useNodeBodyTypes();
	
  return (
    <FormItem name={name} {...formItemProps}>
	    <Select
		    name={name}
		    options={options}
		    defaultValue="text"
		    {...controlProps}
	    />
    </FormItem>
  );
};

export default NodeBodyTypeSelectField;