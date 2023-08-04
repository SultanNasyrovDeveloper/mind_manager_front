import { useMemo } from 'react';
import { langNames } from '@uiw/codemirror-extensions-langs';
import { CodeLanguageName } from 'ui/types';

export const useCodeLanguages = (): CodeLanguageName[] => {
  return useMemo(() => {
    return langNames;
  }, []);
};

