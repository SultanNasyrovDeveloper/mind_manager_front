import React, { FC, ReactNode, useRef } from 'react';
import styled from 'styled-components';
import FormActions from 'lib/components/FormActions';
import { Drawer, DrawerProps } from 'ui';
import { FormProps, FormManagerProps } from '../form';

type DynamicFormProps = Omit<FormManagerProps<any>, 'innerRef'> & Record<string, any>;

export interface FormDrawerProps
	extends Omit<DrawerProps, 'onClose'> {
	title?: ReactNode;
	noBodyPadding?: boolean;
	FormComponent: FC<FormManagerProps<any>>;
	formProps: DynamicFormProps;
	onClose?: () => void;
}

export const FormDrawer: FC<FormDrawerProps> = ({
	title,
	onClose,
	FormComponent,
	formProps,
	...rest
}) => {
	const formRef = useRef<FormProps<unknown>>(null);
	
	const handleClose = () => {
		formRef.current?.resetForm();
		onClose && onClose();
	};
	
	return (
		<Drawer
			closable
			title={title}
			size="large"
			extra={
				<FormActions
					onCancel={handleClose}
					onClear={() => formRef.current?.resetForm()}
					onSave={() => formRef.current?.handleSubmit()}
				/>
			}
			onClose={handleClose}
			{...rest}
		>
			<FormComponent
				innerRef={formRef}
				{...formProps}
			/>
		</Drawer>
	);
};

const StyledFormDrawer = styled<FC<FormDrawerProps>>(FormDrawer)`
	.ant-drawer-body {
		padding: ${props => props.noBodyPadding ? 0 : 'default'}
	}
`;

export default StyledFormDrawer;