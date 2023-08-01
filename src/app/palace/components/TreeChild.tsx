import React, { FC } from 'react';
import { TreeNode } from 'types/palace';
import { Card } from 'ui';

export interface TreeChildProps {
  node: TreeNode;
}

const TreeChild: FC<TreeChildProps> = ({node, ...rest}) => {
  return (
    <Card title={node.name} />
  );
};

export default TreeChild;