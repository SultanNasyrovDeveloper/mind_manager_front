import React, { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import NodeBreadcrumbs from 'app/node/components/NodeBreadcrumbs';
import useAsync from 'lib/hooks/useAsync';
import {
  useLearningSessionStore,
  getCurrentRepeatedNodeId
} from 'store/learning-session';
import { useNodeStore } from 'store/node';
import { useUserStore } from 'store/user';
import { Button, Card, Col, Link, Row, Space } from 'ui';

export interface RepeatedNodePageProps {}

const RepeatedNodePage: FC<RepeatedNodePageProps> = (
  {...rest}
) => {
  const navigate = useNavigate();
  const userPalaceId = useUserStore(state => state.currentUser?.mind_palace)
  const activeSessionId = useLearningSessionStore(state => state.activeSession?.id);
  const currentNode = useNodeStore(state => state.detail);
  const currentRepeatedNodeId = useLearningSessionStore(getCurrentRepeatedNodeId);
  const fetchNode = useNodeStore(state => state.fetchDetail);
  const finishLearningSession = useLearningSessionStore(state => state.finish);
  
  const finishCurrentSession = useCallback(async () => {
    if (!activeSessionId) return;
    await finishLearningSession(activeSessionId);
    const targetUrl = userPalaceId ? `/palace/${userPalaceId}` : '/dashboard';
    navigate(targetUrl)
  }, [activeSessionId, userPalaceId, navigate, finishLearningSession]);
  
  useAsync(async () => {
    if (currentRepeatedNodeId && currentRepeatedNodeId !== currentNode?.id) {
      await fetchNode(currentRepeatedNodeId);
    }
  }, [currentRepeatedNodeId]);
  
  return (
    <>
      {currentNode &&
        <Row justify="center">
          <Col xs={24} md={16} lg={12}>
            <Card
              title={currentNode?.name}
              subtitle={
                <NodeBreadcrumbs
                  currentNodeId={currentNode?.id}
                  ancestors={currentNode?.ancestors || []}
                />
              }
              footer={
                <Space>
                  <Button onClick={finishCurrentSession}>
                    Finish session
                  </Button>
                  <Link to={`/palace/node/${currentNode.id}`}>
                    <Button>See node</Button>
                  </Link>
                </Space>
              }
            />
          </Col>
        </Row>
      }
    </>
    
  );
};

export default RepeatedNodePage;