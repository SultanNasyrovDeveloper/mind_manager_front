import moment from 'moment';
import jwtDecode from 'jwt-decode';
import { AccessToken, AccessTokenParts } from 'types/auth';

export const isAccessTokenExpired = (access: AccessToken): boolean => {
	const tokenParts = jwtDecode<AccessTokenParts>(access);
	const expiredData = moment.unix(tokenParts.exp).utc();
	const now = moment.utc()
	return expiredData <= now;
}