import React, { FC } from 'react';
import { TreeNode } from 'types/palace';
import { Card } from 'ui';

export interface TreeRootProps {
  node: TreeNode;
}

const TreeRoot: FC<TreeRootProps> = (
  { node, ...rest}
) => {
  return (
    <Card title={node.name}>
      { JSON.stringify(node) }
    </Card>
  );
};

export default TreeRoot;