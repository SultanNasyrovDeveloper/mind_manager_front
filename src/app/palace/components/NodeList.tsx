import React, { FC } from 'react';
import styled from 'styled-components';
import { TreeNode } from 'types/palace';
import { List, ListProps, Link, Text } from 'ui';
import NodeActions from './NodeActions';


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
		    <List.Item
			    extra={
						<NodeActions
							withNavigation={false}
							size="small"
							node={node}
						/>
					}
		    >
			    <Link to={`/palace/${node.id}`}>
				    <Text level={4}>
					    { node.name }
						</Text>
					</Link>
		    </List.Item>
	    )}
	    {...rest}
    />
  );
};

export default NodeList;