import { CodeLanguageName } from './core';
import { NodeLearningStatistics } from './learning';

export type NodeBodyType = 'text' | 'code' | 'chess' | 'translation';

export interface NodeAncestor {
  id: number;
  name: string;
}

export interface ICodeBodyMeta {
  language?: CodeLanguageName;
}

export interface IChessBodyData {
  description: string;
}

export interface NodeBody {
  id: number;
  node_id: number;
  type: NodeBodyType;
  meta: ICodeBodyMeta;
  data: {
    content?: string;
    code?: string;
    position_description?: string;
  };
}

export interface INodeCreateFormData {
  name?: string;
  parent: number;
  body?: {
    type: string;
    meta?: {
      language?: string;
    }
  }
}

export interface PalaceNode {
  id: number;
  name: string;
  description: string;
  parent: number;
  owner: number;
  level: number;
  lft: number | null | undefined;
  rght: number | null | undefined;
  
  ancestors: NodeAncestor[];
  statistics: NodeLearningStatistics;
  body: NodeBody;
  children: PalaceNode[];
}


