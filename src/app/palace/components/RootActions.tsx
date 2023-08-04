import React, { FC } from 'react';
import { TreeNode } from 'types/palace';
import { Space, Button, Link, Dropdown } from 'ui';
import {
	CaretUpOutlined,
	CaretRightOutlined,
	CaretLeftOutlined,
	FormOutlined,
	BarsOutlined
} from 'ui/icons';

export interface RootActionsProps {
	node: TreeNode;
}

const RootActions: FC<RootActionsProps> = (
	{ node, ...rest}
) => {
  return (
	  <Space>
		  {/*<Link to={`/palace/${node.lft}`}>*/}
			{/*  <Button*/}
			{/*	  type="text"*/}
			{/*	  icon={<CaretLeftOutlined />}*/}
			{/*	  disabled={!node.lft}*/}
			{/*  />*/}
		  {/*</Link>*/}
		  <Link to={`/palace/${node.parent}`}>
			  <Button
				  type="text"
				  icon={<CaretUpOutlined />}
				  disabled={!node.parent}
			  />
		  </Link>
		  {/*<Link to={`/palace/${node.rght}`}>*/}
			{/*  <Button*/}
			{/*	  type="text"*/}
			{/*	  icon={<CaretRightOutlined />}*/}
			{/*	  disabled={!node.rght}*/}
			{/*  />*/}
		  {/*</Link>*/}
		  <Space size="small">
			  <Link to={`/palace/node/${node.id}`}>
				  <Button
					  type="text"
					  icon={<FormOutlined />}
				  />
			  </Link>
			  <Dropdown
				  placement="bottomRight"
				  menu={{ items: [] }}
			  >
				  <Button
					  type="text"
					  icon={<BarsOutlined />}
				  />
			  </Dropdown>
		  </Space>
		  
	  </Space>
  );
};

export default RootActions;