import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import NodeBreadcrumbs from 'app/node/components/NodeBreadcrumbs';
import BackButton from 'lib/components/BackButton';
import useAsync from 'lib/hooks/useAsync';
import { useNodeStore, useNodeBodyStore } from 'store/node';
import { Row, Col, Card, Layout } from 'ui';
import NodeView from '../views/View';
import {Space} from "antd";

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
    debugger;
    if (queryParamsId && queryParamsId !== currentNodeId) {
      const node = await fetchNode(queryParamsId);
      if (node) await fetchNodeBody(node.body)
    }
  }, [nodeId, fetchNode, fetchNodeBody]);
  
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