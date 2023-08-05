import { Identifier } from 'types/core';
import { SelectItemProps } from 'ui';

export const apiObjectToOption = (
	apiObject: { id: Identifier, name: string }
): SelectItemProps => ({
	key: String(apiObject.id),
	label: apiObject.name,
	value: apiObject.id
});