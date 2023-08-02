import React, { FC } from 'react';
import { TreeNode } from 'types/palace';
import { Card, Link, Typography } from 'ui';
import NodeList from './NodeList';

export interface TreeChildProps {
  node: TreeNode;
}

const TreeChild: FC<TreeChildProps> = ({node, ...rest}) => {
  return (
    <Card
      title={
        <Link to={`/palace/${node.id}`}>
          <Typography.Text>{ node.name }</Typography.Text>
        </Link>
      }
      bodyStyle={{
        paddingBottom: '16px',
        paddingTop: '4px',
        height: '30vh',
        overflowY: 'auto'
      }}
    >
      <NodeList
        size="small"
        nodes={node.children}
      />
    </Card>
  );
};

export default TreeChild;