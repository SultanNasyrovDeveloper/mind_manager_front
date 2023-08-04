import client from 'api';
import { UserApiClient } from 'api/endpoints/user';
import { MethodResponse } from 'api/types';
import { EndpointObjectState } from 'store/types';
import { LoginCredentials, AuthTokens } from 'types/auth';
import { User } from 'types/user';
import { createApiEndpointStore } from '../base';

export interface UserStoreState extends EndpointObjectState<User> {
	access?: string;
	refresh?: string;
	getAccessKey(): string | undefined;
	getRefreshKey(): string | undefined;
	currentUser: User;
	login: (credentials: LoginCredentials) => Promise<AuthTokens | undefined>;
	logout: () => void;
	fetchMe: () => Promise<User>
}

export const useUserStore = createApiEndpointStore<
	User,
	UserApiClient,
	UserStoreState
	>(
		'User',
		client.users,
		(apiClient, set, get) => ({
			currentUser: undefined,
			access: localStorage.getItem('access') || undefined,
			refresh: localStorage.getItem('refresh') || undefined,
			getAccessKey() {
				const storeKey = get().access || undefined;
				if (storeKey) return storeKey;
				const localStorageKey = localStorage.getItem('access');
				if (localStorageKey) {
					set({ access: localStorageKey });
					return localStorageKey;
				}
				return undefined;
			},
			getRefreshKey() {
				const storeKey = get().refresh;
				if (storeKey) return storeKey;
				const localStorageKey = localStorage.getItem('refresh');
				if (localStorageKey) {
					set({ refresh: localStorageKey });
					return localStorageKey;
				}
				return undefined;
				
			},
			async signup() {},
			async login(
				credentials: LoginCredentials
			): Promise<MethodResponse<AuthTokens>> {
				const [tokens, error] = await client.auth.fetchTokens(credentials);
				if (!error && tokens) set(tokens);
				return [tokens, error]
			},
			logout() {
				set({
					access: undefined,
					refresh: undefined,
					currentUser: undefined
				});
				localStorage.removeItem('access');
				localStorage.removeItem('refresh');
			},
			async fetchMe(): Promise<User | undefined> {
				const [me, error] = await apiClient.fetchMe();
				if (!error && me) set({ currentUser: me });
				return me;
			},
		})
);