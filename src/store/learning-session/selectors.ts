import { LearningSessionState } from 'store/learning-session/store';

export const getCurrentRepeatedNodeId = (
	state: LearningSessionState
): number | undefined => state.activeSession?.current_node;