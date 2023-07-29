
export type Url = string;

export type IQueryParams = Record<string, any>;
export type QueryParams = IQueryParams;
export type PaginationConfig = IQueryParams;

export type IPaginatedResult<ResultType> = {
  count: number;
  results: ResultType[];
};
export type PaginatedResult<ResultType> = {
  count: number;
  results: ResultType[];
};