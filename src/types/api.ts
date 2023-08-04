
export type Url = string;
export type QueryParams = Record<string, any>;
export type PaginationConfig = QueryParams;
export type PaginatedResult<ResultType> = {
  count: number;
  results: ResultType[];
};