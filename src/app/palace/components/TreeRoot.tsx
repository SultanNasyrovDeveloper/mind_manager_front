import React, { FC } from 'react';
import { TreeNode } from 'types/palace';
import LearningStatistics from 'app/node/components/LearningStatistics';
import { Card, Typography } from 'ui';
import RootActions from './RootActions';

export interface TreeRootProps {
  node: TreeNode;
}

const TreeRoot: FC<TreeRootProps> = (
  { node, ...rest}
) => {
  return (
    <Card
      title={<Typography>{ node.name }</Typography>}
      extra={<RootActions node={node} />}
    >
      <LearningStatistics statistics={node.statistics} />
    </Card>
  );
};

export default TreeRoot;