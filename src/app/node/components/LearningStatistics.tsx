import React, { FC } from 'react';
import { NodeLearningStatistics } from 'types';
import { Space, Typography, Size } from 'ui';
import {
  EyeOutlined,
  RetweetOutlined,
  StarOutlined,
  FireOutlined
} from 'ui/icons';

export interface LearningStatisticsProps {
  statistics: NodeLearningStatistics;
  size?: Size;
}

const LearningStatistics: FC<LearningStatisticsProps> = (
  { size =  'middle', statistics }
) => {

  return (
    <Space size={size}>
      <Typography.Text>{ statistics.status }</Typography.Text>
      <Space>
        <EyeOutlined />
        <Typography.Text>{ statistics.views }</Typography.Text>
      </Space>
      <Space align="start">
        <RetweetOutlined />
        <Typography.Text>{ statistics.repetitions }</Typography.Text>
      </Space>
      <Space align="start">
        <StarOutlined />
        <Typography.Text>{ statistics.average_rate }</Typography.Text>
      </Space>
      <Space align="start">
        <FireOutlined />
        <Typography.Text>{ statistics.easiness }</Typography.Text>
      </Space>
    </Space>
  );
};

export default LearningStatistics;
