import { Identifier } from 'types/core';
import { OptionProps } from '.';

export const toSelectOption = (
	apiObject: { id: Identifier, name: string },
	additional: Partial<OptionProps> = {}
): OptionProps => ({
	key: apiObject.id,
	label: apiObject.name,
	value: apiObject.id,
	...additional
});