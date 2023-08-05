import React, { FC } from 'react';
import { FormManager, FormManagerProps, Form } from 'lib/form';
import NodeSelectField from 'lib/form/fields/NodeSelectField';
import { LearningSession } from 'types/learningSession';

export interface LearningSessionFormProps
	extends Omit<FormManagerProps<Partial<LearningSession>>, 'initialValues'> {
	initialValues?: Partial<LearningSession>;
}

const LearningSessionForm: FC<LearningSessionFormProps> = (
	{ initialValues, formProps, ...formManagerProps }
) => {
  return (
    <FormManager
	    initialValues={initialValues || {}}
	    {...formManagerProps}
    >
	    <Form layout="vertical" {...formProps}>
		    <NodeSelectField
			    name="targets"
			    label="Targets"
			    controlProps={{ placeholder: 'Type node name here...' }}
		    />
	    </Form>
    </FormManager>
  );
};

export default LearningSessionForm;