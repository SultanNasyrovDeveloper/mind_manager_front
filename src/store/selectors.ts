import { EndpointObjectState } from './types';


export const getDetailId = (
	state: EndpointObjectState<any>
): number | undefined => state.detail?.id;