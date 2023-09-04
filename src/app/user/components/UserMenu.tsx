import React, { FC, useMemo } from 'react';
import useLogout from 'app/auth/hooks/useLogout';
import { useUserStore, getIsCurrentUserAuthenticated } from 'store/user';
import { Dropdown, Button, DropdownProps, Space, Link, ItemType } from 'ui';
import { UserOutlined, ProfileOutlined, CloseOutlined } from 'ui/icons'

export interface UserMenuProps extends DropdownProps {}

const UserMenu: FC<UserMenuProps> = (
  {...rest}
) => {
  const isAuthenticated = useUserStore(getIsCurrentUserAuthenticated);
  const logout = useLogout()
  const userMenuItems = useMemo<ItemType[]>(() => [
    {
      key: 'profile',
      label: 'Profile',
      icon: <ProfileOutlined />,
      onClick: () => {}
    },
    {
      key: 'signout',
      label: 'Sign out',
      icon: <CloseOutlined />,
      onClick: logout
    },
  ], [logout]);
  
  return (
    <>
      {isAuthenticated &&
        <Dropdown
          menu={{ items: userMenuItems }}
          placement="bottomRight"
        >
          <Button icon={<UserOutlined />}/>
        </Dropdown>
      }
      {!isAuthenticated &&
        <Space>
          <Link to="/auth/signup">Signup</Link>
          <Link to="/auth/login">Login</Link>
        </Space>
      }
    </>
    
  );
};

export default UserMenu;