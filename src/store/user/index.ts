import { mountStoreDevtool } from 'simple-zustand-devtools';
import { useUserStore } from './store';

mountStoreDevtool('User', useUserStore);

export * from './store';
export * from './selectors';