import React, { FC } from 'react';
import useOpen from 'lib/hooks/useOpen';
import { useLearningSessionStore } from 'store/learning-session';
import { useNodeStore } from 'store/node';
import { Button, Drawer, Rate, Space } from 'ui';
import LearningSessionForm from '../forms/learning-session';

export interface LearningControlPanelProps {}

const LearningControlPanel: FC<LearningControlPanelProps> = (
	{...rest}
) => {
	const nodeId = useNodeStore(state => state.detail?.id);
	const [isOpen, , toggleIsOpen] = useOpen();
	const activeSession = useLearningSessionStore(state => state.activeSession);
  return (
		<>
			{!activeSession &&
        <Button
          type="primary"
          onClick={toggleIsOpen}
        >Learn</Button>
			}
			{activeSession &&
				<Space>
          <Button >
		        <Rate />
          </Button>
				</Space>
			}
			<Drawer
				closable
				size="large"
				open={isOpen}
				title="Start learning session"
				onClose={toggleIsOpen}
			>
				<LearningSessionForm
					enableReinitialize
					initialValues={{ targets: nodeId ? [nodeId] : [] }}
					onSubmit={() => {}}
				/>
			</Drawer>
		</>
  
  );
};

export default LearningControlPanel;