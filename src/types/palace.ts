import { NodeLearningStatistics } from './learning'

export type PalaceStatisticsField =
  'count'
  | 'views'
  | 'repetitions'
  | 'average_rating'
  | 'size';

export interface MindaPalace {
  id: number;
  root: number;
  user: number;
}

export interface TreeNode {
  id: number;
  parent: number | null;
  name: string;
  level: number;
  lft: number | null | undefined;
  rght: number | null | undefined;
  statistics: NodeLearningStatistics;
  children: TreeNode[];
}

export interface PalaceStatistics
  extends Record<PalaceStatisticsField, number> {
  root: number;
}

