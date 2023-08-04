import moment from 'moment';
import jwtDecode from 'jwt-decode';
import { AccessToken, AccessTokenParts } from 'types/auth';

export const isAccessTokenExpired = (access: AccessToken): boolean => {
	const tokenParts = jwtDecode<AccessTokenParts>(access);
	return moment.unix(tokenParts.exp).utc() <= moment.utc();
}