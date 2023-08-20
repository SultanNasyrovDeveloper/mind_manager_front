import { Identifier } from './core';
import { CodeLanguageName } from 'ui/types';

export type NodeBodyType = 'text' | 'code' | 'chess' | 'translation';

export interface NodeAncestor {
  id: number;
  name: string;
}

export type CodeBodyMeta = Record<string, any>;

export interface ChessBodyData {
  description: string;
}

export interface NodeBody {
  id: number;
  node_id: number;
  type: NodeBodyType;
  meta: CodeBodyMeta;
  data: {
    content?: string;
    code?: string;
    position_description?: string;
  };
}

export enum NodeMediaType {
  notSet = 1,
  youtube = 2
}

export interface NodeMedia {
  id: Identifier;
  title: string;
  description: string;
  type: NodeMediaType;
  node: Identifier;
  config: Record<string, unknown>
}

export interface NodeCreateFormData {
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
  id: Identifier;
  name: string;
  description: string;
  parent: Identifier;
  owner: Identifier;
  level: number;
  lft: Identifier | null | undefined;
  rght: Identifier | null | undefined;
  
  ancestors: NodeAncestor[];
  statistics: Identifier;
  body: Identifier;
  children: Identifier[];
}


