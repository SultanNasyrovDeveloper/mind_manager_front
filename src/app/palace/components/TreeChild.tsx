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
          <Text isPointable level={3}>{ node.name }</Text>
        </Link>
      }
      bodyStyle={{ height: '30vh', paddingTop: '0', overflowY: 'auto' }}
      extra={
        <NodeActions
          size="small"
          buttonType="default"
          withNavigation={false}
          node={node}
        />
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