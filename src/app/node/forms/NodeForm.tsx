import React, { FC } from 'react';
import * as yup from 'yup';
import Form, { FormProps } from 'lib/form';
import InputField from 'lib/form/fields/InputField';
import NumberField from 'lib/form/fields/NumberField';
import TextField from 'lib/form/fields/TextField';
import NodeBodyTypeSelectField from 'lib/form/fields/NodeBodyTypeSelectField';
import { PalaceNode } from 'types/node';

export interface NodeFormProps
	extends FormProps<Partial<PalaceNode>> {
	hiddenFields?: keyof PalaceNode;
}

const validationSchema = yup.object().shape({
	parent: yup.number().required().min(1),
	name: yup.string().min(2).required(),
	description: yup.string().optional(),
	body: yup.object().nullable().optional().shape({
		type: yup.string().required().oneOf(
			['text', 'translation', 'code', 'chess']
		)
	})
});

const NodeForm: FC<NodeFormProps> = (
	{ initialValues, ...formProps }
) => {
  return (
    <Form
	    initialValues={initialValues || {}}
	    validationSchema={validationSchema}
	    {...formProps}
    >
	    <NumberField hidden name="parent" />
	    <InputField required name="name" label="Name" />
	    <NodeBodyTypeSelectField name="body.type" label="Type" />
	    <TextField required={false} name="description" label="Description" />
    </Form>
  );
};

export default NodeForm;