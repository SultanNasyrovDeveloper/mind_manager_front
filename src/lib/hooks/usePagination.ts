import { useState, useMemo } from 'react';
import { QueryParams } from 'types/api';
import { PaginationProps } from 'ui';

const usePagination = (): [PaginationProps, QueryParams, (count: number) => void] => {
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	const [count, setCount] = useState(0);
	
	return useMemo<[PaginationProps, QueryParams, (count: number) => void]>(() => [
		{
			current: page,
			total: count || 0,
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