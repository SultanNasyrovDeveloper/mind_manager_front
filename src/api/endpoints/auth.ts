import { MethodResponse } from 'api/types';
import {
	LoginCredentials,
	AuthTokens,
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
	
	async fetchTokens(credentials: LoginCredentials): Promise<MethodResponse<AuthTokens>> {
		return await this.client.post<AuthTokens>({
			url: tokenObtainUrl,
			data: credentials
		}, false);
	}
	
	async refreshToken(): Promise<MethodResponse<RefreshTokenResponse>> {
		return await this.client.post<RefreshTokenResponse>(
			{
				url: tokenRefreshUrl,
				data: { refresh: useUserStore.getState().refresh }}
		);
	}
	
	async getAuthHeaders(): Promise<Record<string, string>> {
		const accessKey = useUserStore.getState().access;
		if (accessKey) {
			if (isAccessTokenExpired(accessKey)) {
				await this.refreshToken();
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