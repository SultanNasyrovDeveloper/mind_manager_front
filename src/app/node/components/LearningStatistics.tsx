import React, { FC } from 'react';
import { NodeLearningStatistics } from 'types';
import { Space, Text, Size, Tag, Divider } from 'ui';
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
    <>
      <Space size="small">
        <EyeOutlined />
        <Text>{ statistics.views }</Text>
      </Space>
      <Divider type="vertical" />
      <Space size="small">
        <RetweetOutlined />
        <Text>{ statistics.repetitions }</Text>
      </Space>
      <Divider type="vertical" />
      <Space size="small">
        <StarOutlined />
        <Text>{ statistics.average_rate }</Text>
      </Space>
      <Divider type="vertical" />
      <Space size="small">
        <FireOutlined />
        <Text>{ statistics.easiness }</Text>
      </Space>
      <Divider type="vertical" />
      <Tag>{ statistics.status }</Tag>
    </>
  );
};

export default LearningStatistics;
