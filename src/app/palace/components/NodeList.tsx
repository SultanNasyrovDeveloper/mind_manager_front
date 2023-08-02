import React, { FC } from 'react';
import styled from 'styled-components';
import { TreeNode } from 'types/palace';
import { List, ListProps, Link, Typography } from 'ui';

export interface NodeListProps
	extends Omit<ListProps<TreeNode>, 'dataSource' | 'renderItem'> {
	nodes: TreeNode[];
}

const StyledList = styled<FC<ListProps<TreeNode>>>(List)`
	.ant-list-item {
		padding-right: 0;
		padding-left: 0;
	}
`;

const NodeList: FC<NodeListProps> = (
	{ nodes, ...rest}
) => {
  return (
    <StyledList
	    dataSource={nodes}
	    renderItem={(node: TreeNode) => (
		    <List.Item extra={<div>Extra</div>}>
			    <Link to={`/palace/${node.id}`}>
				    <Typography.Text
					    style={{ fontSize: '12px' }}
				    >
					    { node.name }
						</Typography.Text>
					</Link>
		    </List.Item>
	    )}
	    {...rest}
    />
  );
};

export default NodeList;