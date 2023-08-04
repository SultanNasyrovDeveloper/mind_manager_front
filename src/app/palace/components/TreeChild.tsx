import React, { FC } from 'react';
import LearningStatistics from 'app/node/components/LearningStatistics';
import { TreeNode } from 'types/palace';
import { Card, Link, Text } from 'ui';
import NodeList from './NodeList';
import NodeActions from './NodeActions';

export interface TreeChildProps {
  node: TreeNode;
}

const TreeChild: FC<TreeChildProps> = (
  { node, ...rest}
) => {
  return (
    <Card
      title={
        <Link to={`/palace/${node.id}`}>
          <Text isPointable level={2}>{ node.name }</Text>
        </Link>
      }
      subtitle={
        <LearningStatistics size="small" statistics={node.statistics} />
      }
      bodyStyle={{ height: '30vh', overflowY: 'auto' }}
      extra={
        <NodeActions withNavigation={false} node={node} />
      }
    >
      <NodeList
        size="small"
        nodes={node.children}
      />
    </Card>
  );
};

export default TreeChild;