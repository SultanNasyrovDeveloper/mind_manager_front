import { useMemo } from 'react';

const useMemoOnce = <T>(memoFunction: () => T): T => {
  return useMemo(memoFunction, []);
};

export default useMemoOnce;
