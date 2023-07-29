import moment from 'moment';
import { Url } from 'types';

export const makeDetailUrl = (baseUrl: Url, id: number | string): Url =>
	`${baseUrl}${id}/`;

export const checkIfExpired = (expires: string): boolean => {
	return moment(expires) <= moment();
}