// @ts-nocheck
import { create } from 'zustand';
import ApiEndpointClient from 'api/v2/endpoints/base';
import { QueryParams } from 'types/api';
import { Identifier } from 'types/core';
import { notification } from 'ui';
import { EndpointObjectState } from './types';


export const createApiEndpointStore = <
	ApiEndpointObject extends { id: number },
	Client = ApiEndpointClient<ApiEndpointObject>,
	State = EndpointObjectState<ApiEndpointObject>,
	>(
	name = 'Unknown state',
	apiClient: Client,
	callback: (
		apiClient: Client,
		set: (updateData: Partial<State>) => void,
		get: () => State
	) => Record<string, any> = () => ({})
) => {
	return create<State>((set, get) => ({
		list: [],
		isDetailLoading: false,
		isDetailUpdating: false,
		isListLoading: false,
		page: 1,
		pageSize: 15,
		total: 0,
		query: {},
		get id() {
			return get().detail?.id;
		},
		setDetail(newDetail: ApiEndpointObject) {
			set({detail: newDetail});
		},
		setPage(page: number) {
			set({ page });
		},
		setPageSize(pageSize: number) {
			set({ pageSize });
		},
		setTotal(total: number) {
			set({ total });
		},
		setQueryParams(query: QueryParams) {
			set({ query });
		},
		updateQueryParams(query: QueryParams) {
			set({ query });
		},
		async create(data: ApiEndpointObject) {
			const [created, error] = await apiClient.create(data);
			if (error) notification.error({
				message: get().name,
				description: 'Failed to create item. ' + String(error)
			});
			return [created, error];
		},
		async fetchDetail(id) {
			set({ isDetailLoading: true });
			const [detail, error] = await apiClient.get(id);
			set({
				isDetailLoading: false,
				detail: detail && !error ? detail : undefined
			});
			if (error) notification.error({
				message: get().name,
				description: 'Failed to fetch item. ' + String(error)
			})
			return [detail, error];
		},
		async fetchList(additionalQuery = {}) {
			set({ isListLoading: true });
			const storeQuery = get().query;
			const combinedQuery = {
				...storeQuery,
				...additionalQuery,
				limit: get().page,
				offset: (get().page - 1) * get().pageSize
			};
			const [paginatedResult, error] = await apiClient.list(combinedQuery);
			set({
				isListLoading: false,
				list: paginatedResult.results,
				total: paginatedResult.count
			});
			if (error) {
				notification.error({
					message: get().name,
					description: 'Failed to load items from the server. ' + String(error)
				});
			}
			return [paginatedResult, error];
		},
		async update(id, data) {
			const detailId = get().detail?.id;
			const isCurrentDetailUpdating = detailId === Number(id)
			if (isCurrentDetailUpdating) set({ isDetailUpdating: true });
			const [updated, error] = await apiClient.update(id, data);
			set({
				detail: !error && updated ? updated : get().detail,
				isDetailUpdating: isCurrentDetailUpdating ? false : get().isDetailUpdating
			});
			if (error) notification.error({
				message: get().name,
				description: 'Failed to update item. ' + String(error)
			})
			// Todo: possibly check if this item in the list
			return [updated, error];
		},
		async delete(id: Identifier) {
			const [, error] = await apiClient.delete(id);
			if (error) notification.error({
				message: get().name,
				description: 'Failed to delete item. ' + String(error)
			});
			return [undefined, error];
		},
		// @ts-ignore
		...callback(apiClient, set, get)
	}));
}