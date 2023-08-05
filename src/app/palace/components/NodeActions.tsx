import React, { FC } from 'react';
import { TreeNode } from 'types/palace';
import { Space, Button, Link, Dropdown, ButtonType, SizedComponent } from 'ui';
import {
  CaretUpOutlined,
  FormOutlined,
  BarsOutlined
} from 'ui/icons';

export interface NodeActionsProps extends SizedComponent {
  node: TreeNode;
  withNavigation?: boolean;
  buttonType?: ButtonType;
}

const NodeActions: FC<NodeActionsProps> = (
  {
    node,
    size = 'middle',
    withNavigation = true,
    buttonType = 'text',
    ...rest
  }
) => {
  return (
    <Space size="small">
      {withNavigation &&
        <Link to={`/palace/${node.parent}`}>
          <Button
            type={buttonType}
            size={size}
            icon={<CaretUpOutlined />}
            disabled={!node.parent}
          />
        </Link>
      }
      <Link to={`/palace/node/${node.id}`}>
        <Button
          size={size}
          type={buttonType}
          icon={<FormOutlined />}
        />
      </Link>
      <Dropdown
        placement="bottomRight"
        menu={{ items: [] }}
      >
        <Button
          size={size}
          type={buttonType}
          icon={<BarsOutlined />}
        />
      </Dropdown>
    </Space>
  );
};

export default NodeActions;