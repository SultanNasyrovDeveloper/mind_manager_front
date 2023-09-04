import { FC } from 'react';
import styled from 'styled-components';
import { PalaceNode } from 'types/node';
import { Card, Row, Space, Typography } from 'ui';
import { ClusterOutlined, SettingOutlined } from 'ui/icons';
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
      }
      extra={
        <Space>
          <ClusterOutlined
            onClick={() => onNodePalaceClick(node)}
          />
          <SettingOutlined />
        </Space>
      }
    >
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
