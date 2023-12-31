import BaseApiEndpoint from './base';
import { PalaceNode, NodeBody, NodeMedia } from 'types/node';

export class NodeApiEndpoint extends BaseApiEndpoint<PalaceNode> {}
export class NodeBodyApiEndpoint extends BaseApiEndpoint<NodeBody> {}
export class NodeMediaApiEndpoint extends BaseApiEndpoint<NodeMedia> {}
