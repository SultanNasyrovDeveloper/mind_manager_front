import React, { FC, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import FormActions from 'lib/components/FormActions';
import { FormManagerProps } from 'lib/form';
import useOpen from 'lib/hooks/useOpen';
import { useLearningSessionStore } from 'store/learning-session';
import { useNodeStore } from 'store/node';
import { LearningSession, RepetitionRating } from 'types/learningSession';
import { Button, Drawer, Space } from 'ui';
import LearningSessionForm from '../../forms/learning-session';
import RateRepetitionButton from './RateRepetitionButton';

export interface LearningControlPanelProps {}

const LearningControlPanel: FC<LearningControlPanelProps> = (
	{ ...rest }
) => {
	const formRef = useRef<FormManagerProps<Partial<LearningSession>>>(null);
	const navigate = useNavigate();
	const nodeId = useNodeStore(state => state.detail?.id);
	const [isOpen, , toggleIsOpen] = useOpen();
	const activeSession = useLearningSessionStore(state => state.activeSession);
	const startLearningSession = useLearningSessionStore(state => state.start);
	const finishSession = useLearningSessionStore(state => state.finish);
	const submitRepetition = useLearningSessionStore(state => state.submitRepetition);
	const handleFormSubmit = useCallback(
		async (data: Partial<LearningSession>) => {
			const newSession = await startLearningSession(data);
			if (newSession) toggleIsOpen();
			if (newSession?.current) navigate('/learning/node/current');
	}, [startLearningSession, toggleIsOpen, navigate]);
	
	const handleSubmitRepetition = useCallback(async (rating: RepetitionRating) => {
		if (!nodeId) return;
		const data = { node: nodeId, rating };
		const updatedSession = await submitRepetition(data);
		if (updatedSession) {
			updatedSession.current
				? navigate('/learning/node/current')
				: navigate('/learning/session/finish');
		}
	}, [nodeId, navigate, submitRepetition]);
	
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
					<RateRepetitionButton onClick={handleSubmitRepetition} />
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