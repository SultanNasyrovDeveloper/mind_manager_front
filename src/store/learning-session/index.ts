import { mountStoreDevtool } from 'simple-zustand-devtools';
import { useLearningSessionStore } from './store';

export * from './store';

mountStoreDevtool('Learning Session', useLearningSessionStore);