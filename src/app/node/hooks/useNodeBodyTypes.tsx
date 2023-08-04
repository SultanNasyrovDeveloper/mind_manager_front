import useMemoOnce from 'lib/hooks/useMemoOnce';
import { SelectItemProps } from 'ui';
import {
  CodeOutlined,
  FileTextOutlined,
  PlaySquareOutlined,
  TranslationOutlined
} from 'ui/icons';

const useNodeBodyTypes = (): SelectItemProps[] => {
  return useMemoOnce<SelectItemProps[]>(() => [
    {
      key: 'text',
      label: 'Text',
      icon: <FileTextOutlined />,
      value: 'text'
    },
    {
      key: 'code',
      label: 'Code',
      icon: <CodeOutlined />,
      value: 'code'
    },
    {
      key: 'chess',
      label: 'Chess',
      icon: <PlaySquareOutlined />,
      value: 'chess'
    },
    {
      key: 'translation',
      label: 'Translation',
      icon: <TranslationOutlined />,
      value: 'translation'
    },
  ]);
};

export default useNodeBodyTypes;
