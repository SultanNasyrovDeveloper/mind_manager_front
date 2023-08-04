import React, { FC } from 'react';
import styled from 'styled-components';
import { FormManager, FormManagerProps, Form, FormItem, Input } from 'lib/form';
import { ChessBodyData } from 'types/node';
import { TextEditor } from 'ui';

export interface ChessBodyFormProps
	extends FormManagerProps<ChessBodyData> {
}

export const StyledForm = styled(Form)`
  width: 100%;
`;

const ChessBodyForm: FC<ChessBodyFormProps> = (
	{...rest}
) => {
	
	
	return (
		<FormManager
			enableReinitialize
			{...rest}
		>
			{({ values, setFieldValue }) => {
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
		</FormManager>
	);
};

export default ChessBodyForm;
