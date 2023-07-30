import { UserStoreState } from './store';

export const getIsCurrentUserAuthenticated = (
	state: UserStoreState
): boolean => {
	return !!state.currentUser && !!state.access;
}