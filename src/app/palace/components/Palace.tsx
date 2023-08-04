import React, { FC } from 'react';
import Preloader from 'lib/components/Preloader';
import { usePalaceStore, getSubtreeChildren } from 'store/palace';
import { Col, Row } from 'ui';
import TreeRootNode from './TreeRoot';
import TreeChildNode from './TreeChild';

export interface PalaceProps {}

const Palace: FC<PalaceProps> = ({...rest}) => {
	const subtree = usePalaceStore(state => state.subtree);
	const subtreeChildren = usePalaceStore(getSubtreeChildren);
	const isSubtreeLoading = usePalaceStore(
		state => state.isSubtreeLoading
	);
	if (!subtree) return <div>Not Found</div>
  return (
		<>
			{isSubtreeLoading && <Preloader />}
			{!isSubtreeLoading &&
        <Row>
          <Col span={24}>
            <TreeRootNode node={subtree} />
          </Col>
          <Col
		          span={24}
		          style={{ height: '85vh', overflowY: 'auto' }}
          >
            <Row>
							{ subtreeChildren.map(childNode => (
								<Col key={childNode.id} span={6}>
									<TreeChildNode node={childNode} />
								</Col>
							)) }
						</Row>
					</Col>
				</Row>
			}
			
		</>
	 
  );
};

export default Palace;