import { useState, useMemo } from 'react';
import { QueryParams } from 'types/api';
import { PaginationProps } from 'ui';

export type UsePaginationReturnType = [
	paginationConfig: PaginationProps,
	paginationQueryParams: QueryParams,
	setCount: (count: number) => void
];

const usePagination = (): UsePaginationReturnType => {
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	const [count, setCount] = useState(0);
	
	return useMemo<UsePaginationReturnType>(() => [
		{
			current: page,
			total: count,
			pageSize,
			onChange: (page: number, pageSize: number) => {
				setPage(page);
				setPageSize(pageSize);
			}
		},
		{
			limit: pageSize,
			offset: (page - 1) * pageSize
		},
		setCount
	], [page, pageSize, count, setPage, setPageSize, setCount])
};

export default usePagination;