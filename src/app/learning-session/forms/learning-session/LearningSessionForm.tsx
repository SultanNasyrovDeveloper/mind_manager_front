import React, { FC } from 'react';
import Form, { FormProps } from 'lib/form';
// import NodeSelectField from 'lib/form/fields/NodeSelectField';
import { LearningSession } from 'types/learningSession';

export interface LearningSessionFormProps
	extends Omit<FormProps<Partial<LearningSession>>, 'initialValues'> {
	initialValues?: Partial<LearningSession>;
}

const LearningSessionForm: FC<LearningSessionFormProps> = (
	{ initialValues, ...formManagerProps }
) => {
  return (
    <Form
	    initialValues={initialValues || {}}
	    {...formManagerProps}
    >
		    {/*<NodeSelectField*/}
			  {/*  name="targets"*/}
			  {/*  label="Targets"*/}
			  {/*  controlProps={{*/}
				{/*		mode: 'multiple',*/}
				{/*		placeholder: 'Type node name here...'*/}
				{/*	}}*/}
		    {/*/>*/}
    </Form>
  );
};

export default LearningSessionForm;