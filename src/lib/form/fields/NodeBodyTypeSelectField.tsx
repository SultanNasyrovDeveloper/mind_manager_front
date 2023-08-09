import React, { FC } from 'react';
import useNodeBodyTypes from 'app/node/hooks/useNodeBodyTypes';
import SelectField, { SelectFieldProps } from './SelectField';

export interface NodeBodyTypeSelectFieldProps
  extends SelectFieldProps {}

const NodeBodyTypeSelectField: FC<NodeBodyTypeSelectFieldProps> = ({...fieldProps}) => {
  const options = useNodeBodyTypes();
  return (
    <SelectField
      options={options}
      defaultValue="text"
      {...fieldProps}
    />
  );
};

export default NodeBodyTypeSelectField;