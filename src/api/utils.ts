import moment from 'moment';
import { Url } from 'types';

export const makeDetailUrl = (baseUrl: Url, id: number | string): Url =>
	`${baseUrl}${id}/`;
