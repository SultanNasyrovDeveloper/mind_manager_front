import { ToolbarPresetName } from './types';

export const smallToolbar = [
	[{ size: [] }],
	['bold', 'italic', 'underline', 'strike'],
	[
		{ list: 'ordered' },
		{ list: 'bullet' }
	],
];

export const defaultToolbar = [
	...smallToolbar,
	[{ 'color': [] }, { 'background': [] }],
	[
		{ indent: '-1' },
		{ indent: '+1' },
		'blockquote'
	],
	[ 'direction', { 'align': [] }],
];

export const fullToolbar = [
	[{ font: [] }],
	...defaultToolbar,
	[{ 'script': 'super' }, { 'script': 'sub' }],
	['link', 'video', 'formula', 'Code-block'],
];

export const toolbarPresetMap: Record<ToolbarPresetName, any> = {
	small: smallToolbar,
	default: defaultToolbar,
	full: fullToolbar
}

export const getToolbarPreset =
	(presetName: ToolbarPresetName): any[] => toolbarPresetMap[presetName];