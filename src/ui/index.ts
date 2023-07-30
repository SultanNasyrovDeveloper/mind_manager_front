import * as React from "react";

export * from 'antd';
export * from './layout';
export type { ItemType } from 'antd/lib/menu/hooks/useItems';
export { default as Link } from './link';

export interface MenuInfo {
	key: string;
	keyPath: string[];
	/** @deprecated This will not support in future. You should avoid to use this */
	item: React.ReactInstance;
	domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}