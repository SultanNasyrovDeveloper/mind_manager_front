import React, { FC } from 'react';
import { Row, Space, Button } from 'ui';
import { SaveOutlined, CloseOutlined, ClearOutlined } from 'ui/icons';

export interface FormActionsProps {
  onClose?: () => void;
  onClear?: () => void;
  onSave?: () => void | Promise<void>;
}

const FormActions: FC<FormActionsProps> = (
  { onClear, onClose, onSave }
) => {
  return (
    <Row justify="center">
      <Space>
        {onClose &&
          <Button
            icon={<CloseOutlined />}
            onClick={onClose}
          >
            Close
          </Button>
        }
        {onClear &&
          <Button
            icon={<ClearOutlined />}
            onClick={onClear}
          >
            Clear
          </Button>
        }
        {onSave &&
          <Button
            type="primary"
            icon={<SaveOutlined />}
            onClick={onSave}
          >
            Save
          </Button>
        }
        
      </Space>
    </Row>
  );
};

export default FormActions;