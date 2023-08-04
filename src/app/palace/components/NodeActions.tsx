import React, { FC } from 'react';
import { TreeNode } from 'types/palace';
import { Space, Button, Link, Dropdown } from 'ui';
import { SizedComponent } from 'ui/types';
import {
  CaretUpOutlined,
  CaretRightOutlined,
  CaretLeftOutlined,
  FormOutlined,
  BarsOutlined
} from 'ui/icons';

export interface NodeActionsProps extends SizedComponent {
  node: TreeNode;
  withNavigation?: boolean;
}

const NodeActions: FC<NodeActionsProps> = (
  {
    node,
    size = 'middle',
    withNavigation = true,
    ...rest
  }
) => {
  return (
    <Space size="small">
      {withNavigation &&
        <Link to={`/palace/${node.parent}`}>
          <Button
            type="text"
            size={size}
            icon={<CaretUpOutlined />}
            disabled={!node.parent}
          />
        </Link>
      }
      <Link to={`/palace/node/${node.id}`}>
        <Button
          size={size}
          type="text"
          icon={<FormOutlined />}
        />
      </Link>
      <Dropdown
        placement="bottomRight"
        menu={{ items: [] }}
      >
        <Button
          size={size}
          type="text"
          icon={<BarsOutlined />}
        />
      </Dropdown>
    </Space>
  );
};

export default NodeActions;