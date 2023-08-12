import { PaginationProps } from 'ui';
import { EndpointObjectState } from './types';

export const getDetailId = (
	state: EndpointObjectState<any>
): number | undefined => state.detail?.id;

export const getPaginationConfig = (
	state: EndpointObjectState<any>
): PaginationProps => ({
	current: state.page,
	pageSize: state.pageSize,
	total: state.total,
	onChange(page, pageSize) {
		state.setPage(page);
		state.setPageSize(pageSize)
	}
});