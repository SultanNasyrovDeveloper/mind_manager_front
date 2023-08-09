import React, { FC } from 'react';
import useAsync from 'lib/hooks/useAsync';
import useOpen from 'lib/hooks/useOpen';
import {
  useNodeStore,
  useNodeMediaStore,
  getFetchNodeMedia
} from 'store/node';
import {
  Button,
  Card,
  CardProps,
  Col,
  Drawer,
  Row,
  Space
} from 'ui';
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  PlusOutlined
} from 'ui/icons';
import NodeMediaForm, { NodeMediaFormProps } from '../../forms/NodeMediaForm';

export interface NodeMediaCardProps
  extends Omit<CardProps, 'extra' | 'children'> {
}

const NodeMediaCard: FC<NodeMediaCardProps> = (
  { ...cardProps}
) => {
  const [isOpen, , toggleIsOpen] = useOpen();
  const nodeId = useNodeStore(state => state.id);
  const nodeMedia = useNodeMediaStore(state => state.list);
  const fetchNodeMedia = useNodeMediaStore(getFetchNodeMedia);
  useAsync(async () => {
    if (nodeId) await fetchNodeMedia(nodeId);
  }, [nodeId, fetchNodeMedia]);
  
  return (
    <Card
      title="Node Media"
      extra={
        <Button
          size="small"
          icon={<PlusOutlined />}
          onClick={toggleIsOpen}
        >
          Add
        </Button>
      }
      {...cardProps}
    >
      <Row>
        { nodeMedia.map(media => (
          <Col span={4}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50px',
                width: '50px',
              }}>
              <Space>
                <Button type="text" icon={<EyeOutlined />} />
                <Button type="text" icon={<EditOutlined />} />
                <Button type="text" icon={<DeleteOutlined />} />
              </Space>
            </div>
          </Col>
        )) }
      </Row>
      <Drawer
        size="large"
        title="Create node media"
        open={isOpen}
        onClose={toggleIsOpen}
      >
        <NodeMediaForm onSubmit={(data) => console.log(data)} />
      </Drawer>
    </Card>
  );
};

export default NodeMediaCard;