import React, { FC } from 'react';
import LearningStatistics from 'app/node/components/LearningStatistics';
import BackButton from 'lib/components/BackButton';
import { TreeNode } from 'types/palace';
import { Card, Space, Text } from 'ui';
import RootActions from './NodeActions';

export interface TreeRootProps {
  node: TreeNode;
}

const TreeRoot: FC<TreeRootProps> = (
  { node, ...rest}
) => {
  return (
    <Card
      title={
        <Space>
          <BackButton />
          <Text isPointable level={2}>{ node.name }</Text>
          <div>
            <LearningStatistics statistics={node.statistics} />
          </div>
        </Space>
      }
      extra={
        <Space>
          <RootActions buttonType="default" node={node} />
        </Space>
      }
    />
  );
};

export default TreeRoot;