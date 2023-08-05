import { FC } from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { ClusterOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { PalaceNode } from 'types';
import LearningStatistics from './LearningStatistics';

export interface GeneralInfoCardProps {
  node: PalaceNode;
  onNodePalaceClick: (node: PalaceNode) => void;
  onUpdate: (updateData: Partial<PalaceNode>) => void;
}

const GeneralInfoCardStyled = styled(Card)`
  .ant-card-body {
    padding-top: 4px;
  }
`;

const PointerText = styled(Typography.Text)`
  cursor: pointer;
`;

const GeneralInfoCard: FC<GeneralInfoCardProps> = (props) => {

  const { node, onNodePalaceClick, onUpdate } = props;
  return (
    <GeneralInfoCardStyled
      title={
      <>
        <Row>
          <Col span={20}>
            <PointerText
              editable={{
                triggerType: ['text'],
                onChange: (value) =>
                  value !== node.name
                    ? onUpdate({ name: value })
                    : null
              }}
            >
              { node?.name }
            </PointerText>
          </Col>
          <Col span={4}>
            <Row justify="end">
              {/*@ts-ignore*/}
              <ClusterOutlined
                onClick={() => onNodePalaceClick(node)}
              />
            </Row>
          </Col>
        </Row>
      </>
      }
    >
      <Row>
        <LearningStatistics
          size="middle"
          // @ts-ignore
          statistics={node?.statistics}
        />
      </Row>

      <div style={{ width: '100%', marginTop: '16px'}}>
        <PointerText
          editable={{
            triggerType: ['text'],
            autoSize: { minRows: 3 },
            onChange: (value) =>
              value !== node.description
                ? onUpdate({ description: value })
                : null
          }}
        >
          { node?.description || `${node?.name} description` }
        </PointerText>
      </div>
    </GeneralInfoCardStyled>
  );
};

export default GeneralInfoCard;
