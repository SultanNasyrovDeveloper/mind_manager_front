import React, { FC, useCallback, Ref } from 'react';
import { FormikProps } from 'formik';
import _ from 'lodash';
import styled from 'styled-components';

import { IChessBodyData } from 'types';
import { Formik, Form, FormItem, Input, TextEditor } from 'ui';

export interface IChessBodyFormProps {
	formRef?: Ref<FormikProps<IChessBodyData>>;
	initialValues: IChessBodyData;
	onSubmit: (data: IChessBodyData) => void;
	onChange?: (hasChanged: boolean, data: IChessBodyData) => void
}

export const StyledForm = styled(Form)`
  width: 100%;
`;

const ChessBodyForm: FC<IChessBodyFormProps> = (
	{ initialValues, onSubmit, formRef, onChange }
) => {
	
	const handleFormSubmit = useCallback((validatedData: IChessBodyData) => {
		onSubmit && onSubmit(validatedData);
	}, [onSubmit]);
	
	return (
		<Formik
			enableReinitialize
			innerRef={formRef}
			initialValues={initialValues}
			onSubmit={handleFormSubmit}
		>
			{({
				  values, touched,
				  initialValues,
				  setFieldValue
			  }) => {
				onChange && onChange(!_.isEqual(values, initialValues), values);
				
				return (
					<StyledForm layout="vertical" >
						<FormItem name="description">
							<TextEditor
								height="300px"
								defaultValue={values?.description}
								onChange={(newValue: string) => setFieldValue('description', newValue)}
								placeholder="Enter position description"
							/>
						</FormItem>
						
					</StyledForm>
				)
			}}
		</Formik>
	);
};

export default ChessBodyForm;
