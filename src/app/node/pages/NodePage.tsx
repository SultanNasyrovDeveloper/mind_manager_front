import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import useAsync from 'lib/hooks/useAsync';
import { useNodeStore, useNodeBodyStore } from 'store/node';
import { Row, Col, Card, Layout } from 'ui';
import NodeView from '../views/View';

export interface NodePageProps {}

const NodePage: FC<NodePageProps> = (
  {...rest}
) => {
  const { nodeId } = useParams();
  const node = useNodeStore(state => state.detail);
  const currentNodeId = useNodeStore(state => state.id);
  const fetchNode = useNodeStore(state => state.fetchDetail);
  const fetchNodeBody = useNodeBodyStore(state => state.fetchDetail);
  
  useAsync(async () => {
    const queryParamsId = Number(nodeId);
    if (queryParamsId && queryParamsId !== currentNodeId) {
      const node = await fetchNode(queryParamsId);
      if (node) await fetchNodeBody(node.body)
    }
  }, [nodeId, fetchNode, fetchNodeBody]);
  
  return (
    <Layout>
      <Row>
        <Col span={24}>
          <Card title={JSON.stringify(node?.ancestors)}></Card>
        </Col>
      </Row>
      <Layout.Content>
        <NodeView />
      </Layout.Content>
    </Layout>
  );
};

export default NodePage;