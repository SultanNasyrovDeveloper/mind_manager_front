import React, { FC } from 'react';
import { Row, Space, Button, Tooltip } from 'ui';
import {
	UndoOutlined,
	RetweetOutlined,
	SettingOutlined,
	ArrowLeftOutlined
} from 'ui/icons';

export interface IToolbarProps {
	onChangeOrientation?: () => void;
	onToStartPosition?: () => void;
	onSettings?: () => void;
}

const Toolbar: FC<IToolbarProps> = (props) => {
	const {
		onChangeOrientation,
		onToStartPosition,
		onSettings
	} = props;
	
	return (
		<Row justify="center">
			<Space>
				<Tooltip
					title="Return to start position"
					placement="bottomLeft"
				>
					<Button
						size="large"
						icon={<UndoOutlined />}
						onClick={onToStartPosition}
					/>
				</Tooltip>
				<Tooltip
					title="Undo"
					placement="bottomLeft"
				>
					<Button
						size="large"
						icon={<ArrowLeftOutlined />}
					/>
				</Tooltip>
				<Tooltip
					title="Change turn"
					placement="bottomLeft"
				>
					<Button size="large">M</Button>
				</Tooltip>
				{onChangeOrientation &&
            <Tooltip
                title="Change color"
                placement="bottomLeft"
            >
                <Button
                    size="large"
                    icon={<RetweetOutlined />}
                    onClick={onChangeOrientation}
                />
            </Tooltip>
				}
				{onSettings &&
            <Tooltip
                title="Configure position"
                placement="bottomLeft"
            >
                <Button
                    size="large"
                    icon={<SettingOutlined />}
                    onClick={onSettings}
                />
            </Tooltip>
				}
			</Space>
		</Row>
	);
};

export default Toolbar;
