import { ReactNode } from 'react';
import type { ItemType, MenuItemType } from 'antd/lib/menu/hooks/useItems';
import type { SizeType as Size } from 'antd/lib/config-provider/SizeContext';

export type {
	CollapseProps,
	DividerProps,
	MenuProps,
	SpaceProps,
	DrawerProps,
	DropdownProps,
	ListProps,
	LayoutProps,
	TooltipProps,
	PaginationProps,
} from 'antd';
export type {
	LanguageName as CodeLanguageName
} from '@uiw/codemirror-extensions-langs';

export interface MenuInfo {
	key: string;
	keyPath: string[];
}

export interface MenuItemProps extends MenuItemType {
	[key: string]: any;
}

export interface SelectItemProps {
	key: string;
	label: ReactNode | string;
	icon?: ReactNode;
	value: number | string;
	children?: SelectItemProps[];
}

export interface SizedComponent {
	size?: Size;
}

export { ItemType, Size }