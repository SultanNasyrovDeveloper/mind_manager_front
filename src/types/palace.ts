import { NodeLearningStatistics } from './learning'

export type IPalaceStatisticsField =
  'count'
  | 'views'
  | 'repetitions'
  | 'average_rating'
  | 'size';

export interface IMindaPalace {
  id: number;
  root: number;
  user: number;
}

export type MindPalace = IMindaPalace;

export interface TreeNode {
  id: number;
  parent: number | null;
  name: string;
  statistics: NodeLearningStatistics;
  children: TreeNode[];
}

export interface IPalaceStatistics
  extends Record<IPalaceStatisticsField, number> {
  root: number;
}

