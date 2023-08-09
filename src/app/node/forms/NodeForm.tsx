import React, { FC } from 'react';
import * as yup from 'yup';
import { FormManager, FormManagerProps, Form } from 'lib/form';
// import InputField from 'lib/form/fields/InputField';
// import NodeBodyTypeSelectField from 'lib/form/fields/NodeBodyTypeSelectField';
// import NodeSelectField from 'lib/form/fields/NodeSelectField';
// import NumberField from 'lib/form/fields/NumberField';
// import TextField from 'lib/form/fields/TextField';
import { PalaceNode } from 'types/node';

export interface NodeFormProps
	extends Omit<FormManagerProps<Partial<PalaceNode>>, 'initialValues' | 'validationSchema'> {
	initialValues?: Partial<PalaceNode>;
	hiddenFields?: keyof PalaceNode;
}

const validationSchema = yup.object().shape({
	owner: yup.number().required().min(1),
	parent: yup.number().required().min(1),
	name: yup.string().min(3).required(),
	description: yup.string().optional(),
	body: yup.object().nullable().optional().shape({
		type: yup.string().required().oneOf(
			['text', 'translation', 'code', 'chess']
		)
	})
});

const NodeForm: FC<NodeFormProps> = (
	{ initialValues, formProps, hiddenFields = [], ...formManagerProps }
) => {
  return (
    <FormManager
	    initialValues={initialValues || {}}
	    {...formManagerProps}
	    validationSchema={validationSchema}
    >
	    {/*<Form layout="vertical" {...formProps}>*/}
		  {/*  <NumberField hidden name="owner" />*/}
		  {/*  <NodeSelectField required name="parent" label="Parent"/>*/}
		  {/*  <InputField required name="name" label="Name" />*/}
		  {/*  <NodeBodyTypeSelectField name="body.type" label="Body Type"  />*/}
		  {/*  <TextField required name="description" label="Description" />*/}
	    {/*</Form>*/}
    </FormManager>
  );
};

export default NodeForm;