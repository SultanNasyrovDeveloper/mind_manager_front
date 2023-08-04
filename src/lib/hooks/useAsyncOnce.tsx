import useAsync from './useAsync';

const useAsyncOnce = (asyncFunction: () => Promise<void>) =>
	useAsync(asyncFunction, []);

export default useAsyncOnce;