import React, { FC } from 'react';
import styled from 'styled-components';
import { FormManager, FormManagerProps } from 'lib/form';
import { ChessBodyData } from 'types/node';
import { TextEditor } from 'ui';

export interface ChessBodyFormProps
	extends FormManagerProps<ChessBodyData> {
}

// export const StyledForm = styled(Form)`
//   width: 100%;
// `;

const ChessBodyForm: FC<ChessBodyFormProps> = (
	{...rest}
) => {
	
	
	return (
		<FormManager
			enableReinitialize
			{...rest}
		>

		</FormManager>
	);
};

export default ChessBodyForm;
