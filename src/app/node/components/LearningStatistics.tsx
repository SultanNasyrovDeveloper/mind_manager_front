import React, { FC } from 'react';
import { NodeLearningStatistics } from 'types/learning';

export interface LearningStatisticsProps {
	statistics: NodeLearningStatistics;
}

const LearningStatistics: FC<LearningStatisticsProps> = ({...rest}) => {
  return (
    <div>Learning statistics</div>
  );
};

export default LearningStatistics;