import React, { FC, useState, useMemo, useEffect } from 'react';
import _ from 'lodash';
import { observer } from 'mobx-react-lite';
import { TwoColumnLayout } from 'core';
import { nodeStore } from 'store';
import {
	useNodeStore,
	useNodeBodyStore,
	getBodyChessPosition,
	getBodyChessOrientation
} from 'storev2/node';
import { PalaceNode } from 'types';
import {
	Card,
	Divider,
	Collapse,
	Chessboard,
	IChessFen,
	DEFAULT_POSITION,
	IChessboardOrientation
} from 'ui';
import { grey } from 'ui/colors';
import { GeneralInfoCard } from '../../components';
import BodyActions from '../../components/Actions';
import { NodeViewProps } from '../../types';
import ChessboardToolbar from './Toolbar';

const ObservingGeneralInfoCard = observer(GeneralInfoCard);

const ChessView: FC<NodeViewProps> = ({ onNodeSubtree }) => {
	const [currentPosition, setCurrentPosition] =
		useState<IChessFen>(DEFAULT_POSITION);
	const [boardOrientation, setBoardOrientation] =
		useState<IChessboardOrientation>('white');
	const node = useNodeStore(state => state.detail);
	const isNodeLoading = useNodeStore(state => state.isDetailLoading);
	const isBodyLoading = useNodeBodyStore(state => state.isDetailLoading);
	const body = useNodeBodyStore(state => state.detail);
	const bodyPosition = useNodeBodyStore(getBodyChessPosition);
	const bodyOrientation = useNodeBodyStore(getBodyChessOrientation);
	const updateNode = useNodeStore(state => state.update);
	const updateBody = useNodeBodyStore(state => state.update);
	
	const hasChanged = useMemo(
		() => bodyPosition !== currentPosition,
		[bodyPosition, currentPosition]
	);
	useEffect(() => {
		setCurrentPosition(bodyPosition);
		// @ts-ignore
		setBoardOrientation(bodyOrientation);
	}, [bodyPosition, setCurrentPosition, setBoardOrientation, bodyOrientation]);
	
	return (
		<TwoColumnLayout
			first={
				<Card
					title="Chess position"
					style={{ height: '85vh' }}
					extra={
						<>
							{body &&
								<BodyActions
									isLoading={isNodeLoading || isBodyLoading}
									hasChanged={hasChanged}
									body={body}
									onTypeChange={(newValue) => updateBody(body.id,{ type: newValue})}
									onLanguageChange={(newLanguage) => updateBody(
										body.id,
										{ meta: { language: newLanguage }}
									)}
									onSave={() => updateBody(
										body.id,
										{ meta: { position: currentPosition }}
									)}
								/>
							}
						</>
						
					}
				>
					<TwoColumnLayout
						first={
							<div style={{
								width: '100%',
								display: 'flex',
								justifyContent: 'center',
								backgroundColor: grey.lightest
							}}>
								<Chessboard
									position={currentPosition}
									orientation={boardOrientation}
									onPositionChange={setCurrentPosition}
								/>
							</div>
						}
						second={
							<>
								<ChessboardToolbar
									onToStartPosition={() => setCurrentPosition(_.get(
										nodeStore.node,
										'body.meta.position',
										DEFAULT_POSITION)
									)}
								/>
								<Divider />
								<Collapse
									defaultActiveKey={['analysis']}
									items={[
										{
											key: 'analysis',
											label: 'Position Analysis',
											children: <p>This is panel header 1</p>,
										},
										{
											key: 'keySquares',
											label: 'Key Squares',
											children: <p>This is panel header 1</p>,
										},
										{
											key: 'lines',
											label: 'Lines and Ideas',
											children: <p>This is panel header 1</p>,
										}
									]}
								/>
							</>
						}
					/>
				</Card>
			}
			second={
				<ObservingGeneralInfoCard
					node={node as PalaceNode}
					onNodePalaceClick={() => onNodeSubtree && onNodeSubtree()}
					onUpdate={(updateData) => node && updateNode(node.id, updateData)}
				/>
			}
		/>
	);
};

export default ChessView;