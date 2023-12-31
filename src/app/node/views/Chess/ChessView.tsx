import React, { FC, useState, useMemo, useEffect } from 'react';
import TwoColumnLayout from 'lib/components/TwoColumnLayout';
import {
	useNodeStore,
	useNodeBodyStore,
	getBodyChessPosition,
	getBodyChessOrientation
} from 'store/node';
import { PalaceNode } from 'types/node';
import {
	Card,
	Collapse,
	Chessboard,
	Fen,
	DEFAULT_POSITION,
	BoardOrientation
} from 'ui';
import { grey } from 'ui/colors';
import GeneralInfoCard from '../../components/GeneralInfoCard';
import BodyActions from '../../components/BodyActions';
import { NodeViewProps } from '../../types';
import ChessboardToolbar from './Toolbar';


const ChessView: FC<NodeViewProps> = ({ onNodeSubtree }) => {
	const [currentPosition, setCurrentPosition] =
		useState<Fen>(DEFAULT_POSITION);
	const [boardOrientation, setBoardOrientation] =
		useState<BoardOrientation>('white');
	const body = useNodeBodyStore(state => state.detail);
	const bodyPosition = useNodeBodyStore(getBodyChessPosition);
	const bodyOrientation = useNodeBodyStore(getBodyChessOrientation);
	const updateBody = useNodeBodyStore(state => state.update);
	
	const hasChanged = useMemo(
		() => currentPosition !== bodyPosition,
		[bodyPosition, currentPosition]
	);
	
	useEffect(() => {
		setCurrentPosition(bodyPosition);
		// @ts-ignore
		setBoardOrientation(bodyOrientation || 'white' as BoardOrientation);
	}, [bodyPosition, setCurrentPosition, setBoardOrientation, bodyOrientation]);
	
	return (
		<Card
			title="Chess position"
			style={{ height: '85vh' }}
			extra={
				<>
					{body &&
              <BodyActions
                  hasChanged={hasChanged}
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
					<>
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
						<div>
							<ChessboardToolbar
								onToStartPosition={() => setCurrentPosition(bodyPosition)}
							/>
						</div>
					</>
				}
				second={
					<>
						<Collapse
							defaultActiveKey={['overall']}
							items={[
								{
									key: 'overall',
									label: 'Overall Information',
									children: <p>Overall panel</p>,
								},
								{
									key: 'analysis',
									label: 'Position Analysis',
									children: <p>Position analysis panel</p>,
								},
								{
									key: 'keySquares',
									label: 'Key Squares',
									children: <p>Key squares panel</p>,
								},
								{
									key: 'lines',
									label: 'Lines and Ideas',
									children: <p>Lines and Ideas panel</p>,
								}
							]}
						/>
					</>
				}
			/>
		</Card>
	);
};

export default ChessView;