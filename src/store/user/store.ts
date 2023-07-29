import client from 'api';
import { UserApiClient } from 'api/endpoints/user';
import { EndpointObjectState } from 'store/types';
import { User } from 'types';
import { createApiEndpointStore } from '../base';

export interface UserStoreState extends EndpointObjectState<User> {}

export const useUserStore = createApiEndpointStore<
	User,
	UserApiClient,
	UserStoreState
	>('User', client.users, );