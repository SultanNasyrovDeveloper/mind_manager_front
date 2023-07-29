
export enum LearningSessionStatus {
  active = 'active',
  finished = 'finished'
}
export enum LearningStrategy {
  supermemo2 = 'sm2'
}
export type RepetitionRating = 1 | 2 | 3 | 4 | 5 | 6;

export interface ILearningSession {
  id: number;
  is_active: boolean,
  user: number;
  strategy: LearningStrategy;
  targets: number[];
  current: number;
  start_datetime: string;
  finish_datetime: string;
  last_repetition_datetime: string;
}
export type LearningSession = ILearningSession;

export interface INodeLearningStatistics {
  id: number;
  status: string;
  interval: number;
  repetitions: number;
  views: number;
  positive_repetitions_in_row: number;
  easiness: string;
  average_rate: string;
}
export type NodeLearningStatistics = INodeLearningStatistics;

export interface IStartLearningSessionData {
  targets: number[];
  strategy_name: LearningStrategy;
}
export type StartLearningSessionFormData = IStartLearningSessionData;

export interface ISubmitRepetitionData {
  node: number;
  rating: RepetitionRating;
}
export type SubmitRepetitionData = ISubmitRepetitionData;
