import { mountStoreDevtool } from 'simple-zustand-devtools';
import { useNodeStore, useNodeBodyStore } from './store';

mountStoreDevtool('Node', useNodeStore);
mountStoreDevtool('Node Body', useNodeBodyStore);

export * from './store';
export * from './selectors';