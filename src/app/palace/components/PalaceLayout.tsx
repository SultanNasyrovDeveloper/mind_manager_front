import React, { FC, ReactNode } from 'react';
import { TreeNode } from 'types/palace';

export interface PalaceLayoutProps {
	rootNode: ReactNode;
	children: TreeNode[];
}

const PalaceLayout: FC<PalaceLayoutProps> = ({...rest}) => {
  return (
    <div></div>
  );
};

export default PalaceLayout;