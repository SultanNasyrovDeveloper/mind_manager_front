import {AxiosError, AxiosRequestConfig} from "axios";

export interface RequestConfig extends AxiosRequestConfig {}
export type MethodResponse<ResponseData = undefined> = [
	ResponseData | undefined,
	AxiosError | undefined
];