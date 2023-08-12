import useAsync from './useAsync';

const useAsyncOnce = (asyncFunction: () => any | Promise<any>) =>
	useAsync(asyncFunction, []);

export default useAsyncOnce;