import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Url } from 'types/api';
import { API_HOST } from 'config';
import { AuthClient } from './endpoints/auth';
import { PalaceApiClient } from './endpoints/palace';
import { LearningSessionApiEndpoint } from './endpoints/learningSession';
import {
	NodeApiEndpoint,
	NodeBodyApiEndpoint,
	NodeMediaApiEndpoint
} from './endpoints/node';
import { UserApiClient } from './endpoints/user';
import { MethodResponse, RequestConfig } from './types';

export interface ApiClientConfig
	extends Omit<AxiosRequestConfig, 'baseURL'> {
		baseUrl: Url;
}

export class ApiClient {
	readonly auth: AuthClient;
	readonly baseUrl: Url
	readonly client: AxiosInstance;
	readonly palaces: PalaceApiClient;
	readonly nodes: NodeApiEndpoint;
	readonly bodies: NodeBodyApiEndpoint;
	readonly nodeMedia: NodeMediaApiEndpoint;
	readonly learningSessions: LearningSessionApiEndpoint;
	readonly users: UserApiClient;
	
	constructor({ baseUrl, ...rest }: ApiClientConfig) {
		this.baseUrl = baseUrl;
		this.client = axios.create({ baseURL: baseUrl, ...rest});
		this.auth = new AuthClient(this);
		this.palaces = new PalaceApiClient('palace/palaces/', this);
		this.nodes = new NodeApiEndpoint('node/nodes/', this);
		this.bodies = new NodeBodyApiEndpoint('node/bodies/', this);
		this.nodeMedia = new NodeMediaApiEndpoint('node/media/', this);
		this.learningSessions = new LearningSessionApiEndpoint(
			'learning/sessions/',
			this
		);
		this.users = new UserApiClient('auth/users/', this);
	}
	
	async handle<ResponseData = any>(
		config: RequestConfig,
		withAuth: boolean = true
	): Promise<MethodResponse<ResponseData>> {
		let responseData;
		let error;
		if (withAuth) config.headers = await this.auth.getAuthHeaders();
		try {
			const { data } = await this.client.request<ResponseData>(config);
			responseData = data;
		}
		catch (e) { error = e }
		return [responseData, error as AxiosError]
	}
	
	async get<ResponseData = any>(
		config: RequestConfig,
		withAuth: boolean = true
	): Promise<MethodResponse<ResponseData>> {
		return await this.handle<ResponseData>(
			{ method: 'get', ...config }, withAuth
		);
	}
	
	async post<ResponseData = any>(
		config: RequestConfig,
		withAuth: boolean = true
	): Promise<MethodResponse<ResponseData>> {
		return await this.handle<ResponseData>(
			{ method: 'post', ...config }, withAuth
		);
	}
}

const appApiClient = new ApiClient({
	baseUrl: API_HOST || 'http://localhost:8000/',
	headers: {
		'Content-Type': 'application/json'
	}
});

export default appApiClient;