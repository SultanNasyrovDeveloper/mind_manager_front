import { mountStoreDevtool } from 'simple-zustand-devtools';
import { usePalaceStore } from './store';

mountStoreDevtool('Palace', usePalaceStore);

export * from './selectors';
export * from './store';
