import React, { FC } from 'react';
import { Space, Button } from 'ui';
import { SaveOutlined, ClearOutlined, CloseOutlined } from 'ui/icons';

export interface FormActionsProps {
	loading?: boolean;
	onCancel?: () => void;
	onClear?: () => void;
	onSave?: () => void;
}

const FormActions: FC<FormActionsProps> = ({
	loading = false,
	onCancel,
	onClear,
	onSave
}) => {
	return (
		<Space>
			{onCancel &&
				<Button
					icon={<CloseOutlined />}
					onClick={onCancel}
				>Cancel</Button>
			}
			{onClear &&
				<Button
					icon={<ClearOutlined />}
					onClick={onClear}
				>Clear</Button>
			}
			{onSave &&
        <Button
		      icon={<SaveOutlined />}
		      type="primary"
          htmlType="submit"
          loading={loading}
		      onClick={onSave}
        >Save</Button>
			}
		</Space>
	);
};

export default FormActions;