import { FC, useMemo } from 'react';
import { NodeBodyType } from 'types';
import {
  Button,
  Dropdown,
  Text,
  MenuItemProps
} from 'ui';
import useNodeBodyTypes from '../hooks/useNodeBodyTypes';

export interface BodyTypeSelectProps {
  value: NodeBodyType;
  onChange: (value: NodeBodyType) => void;
}

const TypeSelect: FC<BodyTypeSelectProps> = (
  { value, onChange }
) => {

  const bodyTypes = useNodeBodyTypes();
  const bodyTypeMenuItems = useMemo<MenuItemProps[]>(() => {
    return bodyTypes.map((bodyType) => ({
      key: bodyType.value,
      label: <Text isPointable>{ bodyType.label }</Text>,
      icon: bodyType.icon,
    }));
  }, [bodyTypes]);
  const currentItem = useMemo<MenuItemProps | undefined>(() =>
    bodyTypeMenuItems.find((item) => item.key === value),
    [value, bodyTypeMenuItems]
  );

  return (
    <Dropdown
      menu={{
        forceSubMenuRender: true,
        items: bodyTypeMenuItems,
        onClick: item => onChange && onChange(item.key as NodeBodyType)
      }}
    >
      <Button size="small" icon={currentItem?.icon}>
        { value }
      </Button>
    </Dropdown>
  );
};

export default TypeSelect;
