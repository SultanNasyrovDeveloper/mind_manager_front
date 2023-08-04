import { useMemo } from 'react';
import _ from 'lodash';
import { CodeLanguageName } from 'ui/types';
import { useCodeLanguages } from './useCodeLanguages';

export interface CodeLanguageOption {
  label: string;
  value: CodeLanguageName | undefined;
}

export const useCodeLanguageOptions = (): CodeLanguageOption[] => {
  const languageNames = useCodeLanguages();
  return useMemo(() => {
    return [
      { label: 'Not selected', value: undefined },
      ...languageNames.sort().map(name => ({
        label: _.startCase(name),
        value: name
      }))
    ];
  }, [languageNames]);
};
