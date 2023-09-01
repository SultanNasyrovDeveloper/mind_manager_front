import { PaginationProps } from 'ui';
import { EndpointObjectState } from './types';

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