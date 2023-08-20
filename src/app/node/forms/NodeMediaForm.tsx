import React, {FC} from 'react';
import Form, {FormManagerProps, FormProps} from 'lib/form';
import InputField from 'lib/form/fields/InputField';
import NodeMediaTypeSelectField from 'lib/form/fields/NodeMediaTypeSelectField';
import TextField from 'lib/form/fields/TextField';
import YoutubeVideoInput from 'lib/form/fields/YoutubeVideoInput';
import { NodeMedia, NodeMediaType } from 'types/node';

export interface NodeMediaFormProps
  extends FormProps<Partial<NodeMedia>> {}

const NodeMediaForm: FC<NodeMediaFormProps> = (
  { ...rest}
) => {
  return (
    <Form {...rest} children={({ values }: FormManagerProps<Partial<NodeMedia>>) => (
      <>
        <InputField name="name" label="Name" />
        <NodeMediaTypeSelectField name="type" label="Type" />
        {values?.type === NodeMediaType.youtube &&
          <YoutubeVideoInput name="config" label="Video Url" />
        }
        <TextField name="description" label="Description" />
      </>
    )}/>
  );
};

export default NodeMediaForm;