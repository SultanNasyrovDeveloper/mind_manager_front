import React, { FC, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, MenuProps, MenuInfo } from 'ui';

export interface SidebarMenuItem {
  key: string;
  to: string;
}

export interface SidebarMenuProps
  extends Omit<MenuProps, 'items' | 'selectedKeys'> {
  items?: SidebarMenuItem[]
}

const SidebarMenu: FC<SidebarMenuProps> = (
  { items = [], ...rest }
) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const handleMenuItemClick = ({ key, }: MenuInfo) => {
    const target = items.find(item => item?.key === key);
    if (target) navigate(target.to);
  };
  
  useEffect(() => {
    if (!items || items.length === 0) return;
    const target = items.find(item => location.pathname.includes(item.key));
    if (target) setSelectedKeys([target.key]);
  }, [location, items, setSelectedKeys]);
  
  return (
    <Menu
      items={items}
      selectedKeys={selectedKeys}
      onClick={handleMenuItemClick}
      {...rest}
    />
  );
};

export default SidebarMenu;