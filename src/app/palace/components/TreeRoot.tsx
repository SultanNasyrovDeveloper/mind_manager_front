import React, { FC } from 'react';
import { TreeNode } from 'types/palace';
import LearningStatistics from 'app/node/components/LearningStatistics';
import { Card, Space, Typography, Text } from 'ui';
import RootActions from './NodeActions';

export interface TreeRootProps {
  node: TreeNode;
}

const TreeRoot: FC<TreeRootProps> = (
  { node, ...rest}
) => {
  return (
    <Card
      title={<Text level={1}>{ node.name }</Text>}
      extra={
        <Space>
          <LearningStatistics statistics={node.statistics} />
          <RootActions node={node} />
        </Space>
      }
    />
  );
};

export default TreeRoot;