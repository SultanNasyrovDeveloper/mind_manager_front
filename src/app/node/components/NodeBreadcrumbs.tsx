import { FC, useMemo } from 'react';
import { Breadcrumb } from 'antd';
import { Identifier } from 'types/core';
import { NodeAncestor } from 'types/node';
import { Link, Typography } from 'ui';
import { BreadcrumbProps } from 'ui/types';

export interface NodeBreadcrumbsProps
  extends Omit<BreadcrumbProps, 'items'> {
  currentNodeId?: Identifier;
  ancestors: NodeAncestor[];
}

const NodeBreadcrumbs: FC<NodeBreadcrumbsProps> = (
  { currentNodeId, ancestors }
) => {
  const items = useMemo(() => ancestors.map(
    (ancestor) => ({
      title: ancestor.id === currentNodeId
        ? <Typography>{ ancestor.name }</Typography>
        : <Link to={`/palace/node/${ancestor.id}`}>{ ancestor.name }</Link>
    })
  ), [ancestors, currentNodeId]);

  return (
    <Breadcrumb items={items}/>
  );
};

export default NodeBreadcrumbs;
