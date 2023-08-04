import { QueryParams } from 'types/api';
import { Identifier } from 'types/core';

export interface EndpointObjectState<ApiEndpointObject = { id: number }> {
	name: string;
	detail?: ApiEndpointObject;
	list: ApiEndpointObject[];
	isDetailUpdating: boolean;
	isDetailLoading: boolean;
	isListLoading: boolean;
	query: QueryParams;
	
	get id(): number | undefined;
	setDetail: (newDetail: ApiEndpointObject) => void;
	
	create: (data: Partial<ApiEndpointObject>) => Promise<ApiEndpointObject | undefined>;
	fetchDetail: (id: Identifier) => Promise<ApiEndpointObject | undefined>;
	fetchList: (query: QueryParams) => Promise<[ApiEndpointObject[], number]>;
	update: (
		id: Identifier,
		data: Partial<ApiEndpointObject>
	) => Promise<ApiEndpointObject | undefined>;
	delete: (id: Identifier) => Promise<void>;
}