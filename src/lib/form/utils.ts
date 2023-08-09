import { Identifier } from 'types/core';
import { SelectItemProps } from 'ui';

export const toSelectOption = (
	apiObject: { id: Identifier, name: string },
	additional: Partial<SelectItemProps> = {}
): SelectItemProps => ({
	key: String(apiObject.id),
	label: apiObject.name,
	value: apiObject.id,
	...additional
});