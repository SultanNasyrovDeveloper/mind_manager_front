import { IChessFen, IChessboardOrientation } from 'ui';
import { CodeLanguageName } from './core';
import { INodeLearningStatistics } from './learning';

export type NodeBodyType = 'text' | 'code' | 'chess' | 'translation';

export interface NodeAncestor {
  id: number;
  name: string;
}

export interface ICodeBodyMeta {
  language?: CodeLanguageName;
}

export interface IChessBodyMeta {
  position: IChessFen;
  orientation?: IChessboardOrientation;
}

export interface IChessBodyData {
  description: string;
}

export interface NodeBody {
  id: number;
  node_id: number;
  type: NodeBodyType;
  meta: ICodeBodyMeta | IChessBodyMeta;
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
  
  ancestors: NodeAncestor[];
  statistics: INodeLearningStatistics;
  body: NodeBody;
  children: PalaceNode[];
}


