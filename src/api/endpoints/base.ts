import { PaginatedResult, QueryParams, Url } from 'types/api';
import { Identifier } from 'types/core';
import { ApiClient } from '../client';
import { RequestConfig, MethodResponse } from '../types';
import { makeDetailUrl } from '../utils';

export class ApiEndpointClient<EndpointObjectType> {
	readonly baseUrl: Url;
	readonly client: ApiClient;
	
	constructor(
		baseUrl: Url,
		client: ApiClient
	) {
		this.baseUrl = baseUrl;
		this.client = client;
	}
	
	async get(id: Identifier): Promise<MethodResponse<EndpointObjectType>> {
		const requestData: RequestConfig = {
			method: 'get',
			url: makeDetailUrl(this.baseUrl, id),
		};
		return await this.client.handle<EndpointObjectType>(requestData);
	}
	async list(
		query: QueryParams
	): Promise<MethodResponse<PaginatedResult<EndpointObjectType>>> {
		const requestConfig: RequestConfig = {
			method: 'get',
			url: this.baseUrl,
			params: query
		};
		return await this.client.handle<PaginatedResult<EndpointObjectType>>(
			requestConfig
		);
	}
	async create(
		createData: Partial<EndpointObjectType>
	): Promise<MethodResponse<EndpointObjectType>> {
		const requestConfig: RequestConfig = {
			method: 'post',
			url: this.baseUrl,
			data: createData
		};
		return await this.client.handle<EndpointObjectType>(requestConfig);
	}
	async update(
		id: Identifier,
		updateData: Partial<EndpointObjectType>
	): Promise<MethodResponse<EndpointObjectType>> {
		const requestConfig: RequestConfig = {
			method: 'patch',
			url: makeDetailUrl(this.baseUrl, id),
			data: updateData
		};
		return await this.client.handle<EndpointObjectType>(requestConfig);
	}
	async delete(id: Identifier): Promise<MethodResponse> {
		const requestConfig: RequestConfig = {
			method: 'delete',
			url: makeDetailUrl(this.baseUrl, id),
		};
		return await this.client.handle(requestConfig)
	}
}

export default ApiEndpointClient;