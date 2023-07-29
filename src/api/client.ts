import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Url } from 'types';
import { API_HOST } from 'config';
import { PalaceApiClient } from './endpoints/palace';
import { LearningSessionApiEndpoint } from './endpoints/learningSession';
import { NodeApiEndpoint, NodeBodyApiEndpoint } from './endpoints/node';
import { UserApiClient } from './endpoints/user';
import { MethodResponse, RequestConfig } from './types';
import { checkIfExpired } from './utils';

export interface ApiClientConfig
	extends Omit<AxiosRequestConfig, 'baseURL'> {
		baseUrl: Url;
}

export class ApiClient {
	readonly baseUrl: Url
	private readonly client: AxiosInstance;
	private accessKey: string | undefined;
	private accessKeyExpired: string | undefined;
	readonly palaces: PalaceApiClient;
	readonly nodes: NodeApiEndpoint;
	readonly bodies: NodeBodyApiEndpoint;
	readonly learningSessions: LearningSessionApiEndpoint;
	readonly users: UserApiClient;
	
	constructor({ baseUrl, ...rest }: ApiClientConfig) {
		this.baseUrl = baseUrl;
		this.client = axios.create({ baseURL: baseUrl, ...rest});
		this.palaces = new PalaceApiClient('palace/palaces/', this);
		this.nodes = new NodeApiEndpoint('node/nodes/', this);
		this.bodies = new NodeBodyApiEndpoint('node/bodies/', this);
		this.learningSessions = new LearningSessionApiEndpoint(
			'learning/sessions/', this
		);
		this.users = new UserApiClient(
			'auth/users/',
			this
		);
	}
	
	async handle<ResponseData = undefined>(
		config: RequestConfig
	): Promise<MethodResponse<ResponseData>> {
		/** Handle request */
		let responseData;
		let error;
		try {
			const { data } = await this.client.request<ResponseData>(config);
			responseData = data;
		}
		catch (e) { error = e }
		return [responseData, error as AxiosError]
	}
	
	async get<ResponseData = any>(
		config: RequestConfig
	): Promise<MethodResponse<ResponseData>> {
		return await this.handle<ResponseData>({ method: 'get', ...config });
	}
	
	async post<ResponseData = any>(
		config: RequestConfig
	): Promise<MethodResponse<ResponseData>> {
		return await this.handle<ResponseData>({ method: 'post', ...config })
	}
}

export default new ApiClient({
	baseUrl: API_HOST || 'http://localhost:8000/',
	headers: {
		'Content-Type': 'application/json'
	}
});