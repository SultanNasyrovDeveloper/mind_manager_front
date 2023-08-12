import { ReactNode } from 'react';
import type { ItemType, MenuItemType } from 'antd/lib/menu/hooks/useItems';
import type { SizeType as Size } from 'antd/lib/config-provider/SizeContext';
import type { SelectValue } from 'antd/lib/select';
import type { ValidateStatus } from 'antd/lib/form/FormItem';
import type { TextAreaProps } from 'antd/lib/input/TextArea';

export type {
	BreadcrumbProps,
	BreadcrumbItemProps,
	CollapseProps,
	DividerProps,
	DrawerProps,
	DropdownProps,
	FormProps,
	FormItemProps,
	InputProps,
	InputNumberProps,
	ListProps,
	LayoutProps,
	MenuProps,
	PaginationProps,
	SelectProps,
	SpaceProps,
	TableProps,
	TablePaginationConfig,
	TableColumnType,
	TableColumnsType,
	TableColumnProps,
	TagProps,
	TooltipProps,
} from 'antd';
export type {
	LanguageName as CodeLanguageName
} from '@uiw/codemirror-extensions-langs';
export type { ColumnType } from 'antd/lib/table/interface';

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

export type { ItemType, Size, SelectValue, ValidateStatus, TextAreaProps };