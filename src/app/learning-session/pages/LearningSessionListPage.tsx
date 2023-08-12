import React, { FC } from 'react';
import PageHeader from 'lib/components/PageHeader';
import { Card, Col, Row } from 'ui';
import LearningSessionTable
	from '../components/learning-session-table/LearningSessionTable';

export interface LearningSessionListPageProps {}

const LearningSessionListPage: FC<LearningSessionListPageProps> = ({...rest}) => {
  return (
    <>
      <PageHeader
	      isShowBackButton
	      title="Learning Sessions List"
      />
	    <Row>
		    <Col span={24}>
			    <LearningSessionTable />
		    </Col>
	    </Row>
	    
    </>
  );
};

export default LearningSessionListPage;