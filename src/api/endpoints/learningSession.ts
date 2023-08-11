import { Identifier } from 'types/core'
import {
	LearningSession,
	SubmitRepetitionData
} from 'types/learningSession'
import {
	myActiveSessionUrl,
	startLearningSessionUrl,
	makeSubmitRepetitionUrl,
	makeFinishLearningSessionUrl
} from '../urls';
import { MethodResponse } from '../types';
import { ApiEndpointClient } from './base'

export class LearningSessionApiEndpoint
	extends ApiEndpointClient<LearningSession> {
	
	async fetchMyActive(): Promise<MethodResponse<LearningSession>> {
		return await this.client.get({ url: myActiveSessionUrl });
	}
	async start(
		data: Partial<LearningSession>
	): Promise<MethodResponse<LearningSession>> {
		return await this.client.post<LearningSession>({
			url: startLearningSessionUrl,
			data
		});
	}
	async submitRepetition(
		sessionId: Identifier,
		data: SubmitRepetitionData
	): Promise<MethodResponse<LearningSession>> {
		return await this.client.post<LearningSession>({
			url: makeSubmitRepetitionUrl(sessionId),
			data
		});
	}
	async finish(
		sessionId: Identifier
	): Promise<MethodResponse<LearningSession>> {
		return await this.client.post({ url: makeFinishLearningSessionUrl(sessionId)});
	}
}