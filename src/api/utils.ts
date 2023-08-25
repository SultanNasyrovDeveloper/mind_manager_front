import { Url } from 'types/api';

export const makeDetailUrl = (baseUrl: Url, id: number | string): Url =>
	`${baseUrl}${id}/`;
