import {AxiosError, AxiosRequestConfig} from "axios";

export interface RequestConfig extends AxiosRequestConfig {}
export type MethodResponse<ResponseData = any> = [
	ResponseData | undefined,
	AxiosError | undefined
];