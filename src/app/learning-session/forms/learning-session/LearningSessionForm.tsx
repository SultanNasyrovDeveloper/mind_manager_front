import React, { FC } from 'react';
import Form, { FormProps } from 'lib/form';
import NodeSelectField from 'lib/form/fields/NodeSelectField';
import { LearningSession } from 'types/learningSession';
import QueueGenerationStrategySelect
	from '../../components/QueueGenerationStrategySelect';

export interface LearningSessionFormProps
	extends FormProps<Partial<LearningSession>>{
}

const LearningSessionForm: FC<LearningSessionFormProps> = (
	{ initialValues, ...formProps }
) => {
  return (
    <Form
	    initialValues={initialValues || {}}
	    {...formProps}
    >
	    <NodeSelectField
		    allowClear
		    name="targets"
		    label="Targets"
		    mode="multiple"
		    placeholder="Type node name here..."
	    />
	    <QueueGenerationStrategySelect
	      name="queue_generation_strategy"
	      label="Queue generation strategy"
	      defaultValue={2}
	    />
    </Form>
  );
};

export default LearningSessionForm;