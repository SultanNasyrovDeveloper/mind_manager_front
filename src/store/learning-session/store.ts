import apiClient from 'api';
import { LearningSessionApiEndpoint } from 'api/endpoints/learningSession';
import { Identifier } from 'types/core';
import {
	LearningSession,
	SubmitRepetitionData
} from 'types/learningSession';
import { notification } from 'ui';
import { createApiEndpointStore } from '../base';
import { EndpointObjectState } from'../types';

export interface LearningSessionStoreState
	extends EndpointObjectState<LearningSession> {
	activeSession?: LearningSession;
	fetchMyActive: () => Promise<LearningSession | undefined>,
	start: (data: Partial<LearningSession>) => Promise<LearningSession | undefined>,
	submitRepetition: (data: SubmitRepetitionData) => Promise<LearningSession | undefined>,
	finish: (sessionId: Identifier) => Promise<void>;
}

export const useLearningSessionStore =
	createApiEndpointStore<
		LearningSession,
		LearningSessionApiEndpoint,
		LearningSessionStoreState
		>(
			'Learning Session',
		apiClient.learningSessions,
		(client, set, get) => ({
			activeSession: undefined,
			async fetchMyActive() {
				const [activeSession, error] = await client.fetchMyActive();
				if (!error && activeSession) set({ activeSession });
				if (error) notification.error({
					message: get().name,
					description: 'Failed to fetch active session. ' + String(error)
				});
				return activeSession;
			},
			async start(data: Partial<LearningSession>) {
				const [newSession, error] = await client.start(data);
				if (!error && newSession) set({ activeSession: newSession });
				if (error) {
					if (error.response?.status === 409) return await get().fetchMyActive();
					notification.error({
						message: get().name,
						description: 'Failed to start new learning session. ' + String(error)
					});
				}
				return newSession;
			},
			async submitRepetition(data: SubmitRepetitionData) {
				const [updatedSession, error] = await client.submitRepetition(
					get().detail?.id as number,
					data
				);
				if (!error && updatedSession) set(
					{ activeSession: updatedSession }
				);
				if (error) notification.error({
					message: get().name,
					description: 'Failed to submit repetition. ' + String(error)
				});
				return updatedSession;
			},
			async finish(sessionId: Identifier) {
				const [, error] = await client.finish(sessionId);
				if (!error) set({ activeSession: undefined });
				if (error) notification.error({
					message: get().name,
					description: 'Failed to finish learning session. ' + String(error)
				});
			}
		})
	);
