
export enum LearningSessionStatus {
	active = 'active',
	finished = 'finished'
}

export enum QueueGenerationStrategy {
	random = 1,
	outdatedFirst = 2
}

export type RepetitionRating = 1 | 2 | 3 | 4 | 5 | 6;


export interface LearningSession {
	id: number;
	is_active: boolean,
	user: number;
	targets: number[];
	current: number;
	start_datetime: string;
	finish_datetime: string;
	last_repetition_datetime: string;
}

export interface NodeLearningStatistics {
	id: number;
	status: string;
	interval: number;
	repetitions: number;
	views: number;
	positive_repetitions_in_row: number;
	easiness: string;
	average_rate: string;
}

export interface StartLearningSessionData {
	targets: number[];
	queue_generation_strategy: QueueGenerationStrategy;
}

export interface ISubmitRepetitionData {
	node: number;
	rating: RepetitionRating;
}
export type SubmitRepetitionData = ISubmitRepetitionData;
