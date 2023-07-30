import { MethodResponse } from 'api/types';
import { User } from 'types/user';
import { ApiEndpointClient } from './base';
import { myUserUrl } from '../urls';

export class UserApiClient extends ApiEndpointClient<User> {
	
	async fetchMe(): Promise<MethodResponse<User>> {
		return await this.client.get({ url: myUserUrl });
	}
}