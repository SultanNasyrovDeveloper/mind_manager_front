import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import NodeBreadcrumbs from 'app/node/components/NodeBreadcrumbs';
import BackButton from 'lib/components/BackButton';
import useAsync from 'lib/hooks/useAsync';
import { useNodeStore } from 'store/node';
import { Row, Col, Card, Layout, Space } from 'ui';
import NodeView from '../views/View';

export interface NodePageProps {}

const NodePage: FC<NodePageProps> = (
  {...rest}
) => {
  const { nodeId } = useParams();
  const node = useNodeStore(state => state.detail);
  const currentNodeId = useNodeStore(state => state.id);
  const fetchNode = useNodeStore(state => state.fetchDetail);
  
  useAsync(async () => {
    const queryParamsId = Number(nodeId);
    if (queryParamsId && queryParamsId !== currentNodeId)
      await fetchNode(queryParamsId);
  }, [nodeId, fetchNode]);
  
  return (
    <>
      {node &&
        <Layout>
          <Row>
            <Col span={24}>
              <Card
                title={
                  <Space>
                    <BackButton />
                    <NodeBreadcrumbs
                      currentNodeId={node.id}
                      ancestors={node.ancestors}
                    />
                  </Space>
                }
              />
            </Col>
          </Row>
          <Layout.Content>
            <NodeView />
          </Layout.Content>
        </Layout>
      }
    </>
    
  );
};

export default NodePage;