import React, { FC, useCallback, useRef } from 'react';
import FormActions from 'lib/components/FormActions';
import { FormRef } from 'lib/form';
import useOpen from 'lib/hooks/useOpen';
import { useLearningSessionStore } from 'store/learning-session';
import { useNodeStore } from 'store/node';
import { LearningSession } from 'types/learningSession';
import { Button, Drawer, Rate, Space } from 'ui';
import LearningSessionForm from '../forms/learning-session';

export interface LearningControlPanelProps {}

const LearningControlPanel: FC<LearningControlPanelProps> = (
	{ ...rest }
) => {
	const formRef = useRef<FormRef<Partial<LearningSession>>>(null);
	const nodeId = useNodeStore(state => state.detail?.id);
	const [isOpen, , toggleIsOpen] = useOpen();
	const activeSession = useLearningSessionStore(state => state.activeSession);
	const startLearningSession = useLearningSessionStore(state => state.start);
	const finishSession = useLearningSessionStore(state => state.finish);
	const handleFormSubmit = useCallback(
		async (data: Partial<LearningSession>) => {
			const newSession = await startLearningSession(data);
			if (newSession) toggleIsOpen();
	}, [startLearningSession, toggleIsOpen]);
	
  return (
		<>
			{!activeSession &&
        <Button type="primary" onClick={toggleIsOpen}>Learn</Button>
			}
			{activeSession &&
				<Space>
					<Button onClick={() => finishSession(activeSession?.id)}>
		        Finish
					</Button>
					<Button ><Rate /></Button>
				</Space>
			}
			<Drawer
				closable
				open={isOpen}
				size="large"
				title="Start learning session"
				extra={
					<FormActions
						onCancel={toggleIsOpen}
						onClear={() => formRef.current?.resetForm()}
						onSave={() => formRef.current?.submitForm()}
					/>
				}
				onClose={toggleIsOpen}
			>
				<LearningSessionForm
					enableReinitialize
					validateOnMount
					innerRef={formRef}
					initialValues={{ targets: nodeId ? [nodeId] : [] }}
					onSubmit={handleFormSubmit}
					innerFormProps={{ layout: 'vertical' }}
				/>
			</Drawer>
		</>
  
  );
};

export default LearningControlPanel;