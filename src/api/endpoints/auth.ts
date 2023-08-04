import { MethodResponse } from 'api/types';
import {
	AuthHeaders,
	AuthTokens,
	LoginCredentials,
	RefreshTokenResponse
} from 'types/auth';
import { useUserStore } from 'store/user';
import { ApiClient } from '../client';
import { isAccessTokenExpired } from '../jwt';
import { tokenObtainUrl, tokenRefreshUrl } from '../urls';

export class AuthClient {
	client: ApiClient;
	
	constructor(client: ApiClient) {
		this.client = client;
	}
	
	async fetchTokens(
		credentials: LoginCredentials
	): Promise<MethodResponse<AuthTokens>> {
		return await this.client.post<AuthTokens>({
			url: tokenObtainUrl,
			data: credentials
		}, false);
	}
	
	async refreshToken(): Promise<MethodResponse<RefreshTokenResponse>> {
		return await this.client.post<RefreshTokenResponse>(
			{
				url: tokenRefreshUrl,
				data: { refresh: useUserStore.getState().refresh }
			},
			false
		);
	}
	
	async getAuthHeaders(): Promise<AuthHeaders> {
		const accessKey = useUserStore.getState().getAccessKey();
		if (accessKey) {
			if (isAccessTokenExpired(accessKey)) {
				await useUserStore.getState().refreshAccessToken();
				const updatedAccessKey = useUserStore.getState().access;
				if (updatedAccessKey && !isAccessTokenExpired(updatedAccessKey)) {
					return { Authorization: `JWT ${updatedAccessKey}` };
				}
				return {};
			}
			return { Authorization: `JWT ${accessKey}` };
		}
		return {};
	}
}
