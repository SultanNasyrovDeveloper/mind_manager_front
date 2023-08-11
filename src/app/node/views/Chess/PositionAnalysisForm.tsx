import React, { FC } from 'react';
import Form, { FormProps } from 'lib/form';
import { ChessBodyData } from 'types/node';
import { TextEditor } from 'ui';

export interface ChessBodyFormProps
	extends FormProps<ChessBodyData> {
}

// export const StyledForm = styled(Form)`
//   width: 100%;
// `;

const ChessBodyForm: FC<ChessBodyFormProps> = (
	{...rest}
) => {
	
	
	return (
		<Form
			enableReinitialize
			{...rest}
		>

		</Form>
	);
};

export default ChessBodyForm;
