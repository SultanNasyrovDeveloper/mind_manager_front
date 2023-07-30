import React, { FC } from 'react';
import { useUserStore } from 'store/user';

export interface UserDetailPageProps {

}

const UserDetailPage: FC<UserDetailPageProps> = ({...rest}) => {
	const user = useUserStore(state => state.currentUser);
	
  return (
    <div>{ JSON.stringify(user) }</div>
  );
};

export default UserDetailPage;