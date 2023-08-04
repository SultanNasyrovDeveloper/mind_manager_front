import { ReactNode } from 'react';
import { NodeBodyType } from 'types/node';
import { CodeLanguageName } from 'ui/types';

export interface BodyTypeItem {
	label: string;
	value: NodeBodyType;
	icon: ReactNode
}

export interface CodeLanguageOption {
	label: string;
	value: CodeLanguageName;
}

export interface NodeViewProps {
	onNodeDetail?: () => void;
	onNodeSubtree?: () => void;
}
