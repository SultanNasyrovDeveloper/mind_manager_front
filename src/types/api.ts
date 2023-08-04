
export type Url = string;
export type QueryParams = Record<string, any>;
export type PaginationConfig = Record<string, any>;
export type PaginatedResult<ResultType> = {
  count: number;
  results: ResultType[];
};