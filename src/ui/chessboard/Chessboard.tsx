import React, { FC, useState, useCallback, useEffect } from 'react';
import { Chess, DEFAULT_POSITION } from 'chess.js';
import {
  default as BaseChessboard,
  Props as BaseChessboardProps
} from 'chessboardjsx';
import {
  IChessMove,
  IChessFen,
  IChessSquare
} from './types';
import { getPieceAsObject } from './utils';

export interface IChessboardProps extends BaseChessboardProps {
  position?: IChessFen;
  isEditMode?: boolean;
  onPositionChange?: (fen: IChessFen) => void;
}

const Chessboard: FC<IChessboardProps> = (props) => {
  const {
    position = DEFAULT_POSITION,
    isEditMode = false,
    onPositionChange,
    ...rest
  } = props;

  const [boardPosition, setBoardPosition] = useState<IChessFen>(DEFAULT_POSITION);
  const [chess, setChess] = useState<Chess>(new Chess(boardPosition));

  const initSquare = useCallback((roughSquare: SVGElement) => {
    console.log(roughSquare);
  }, []);

  const handlePieceDrop = useCallback((move: IChessMove) => {
    if (!isEditMode) {
      chess.move({ from: move.sourceSquare, to: move.targetSquare });
      setBoardPosition(chess.fen());
      return;
    }
    if (move.sourceSquare !== 'spare') chess.remove(move.sourceSquare);
    chess.put(getPieceAsObject(move.piece), move.targetSquare);
    setBoardPosition(chess.fen());
  }, [isEditMode, chess]);

  const handleSquareRightClick = useCallback((square: IChessSquare) => {
    if (isEditMode && chess.get(square)) {
      chess.remove(square);
      setBoardPosition(chess.fen());
    }
  }, [isEditMode, chess]);

  useEffect(() => {
    setBoardPosition(position);
    setChess(new Chess(position));
  }, [position]);

  useEffect(
    () => onPositionChange && onPositionChange(boardPosition),
    [boardPosition, onPositionChange]
  );

  return (
    <BaseChessboard
      {...rest}
      sparePieces={isEditMode}
      position={boardPosition}
      // roughSquare={initRoughSquare}
      onDrop={handlePieceDrop}
      onSquareRightClick={handleSquareRightClick}
      // onPieceClick={(piece) => console.log(`${piece} clicked`)}
      // onDragOverSquare={(square) => console.log(`dragged over. ${square}`)}
      // onMouseOutSquare={(square) => console.log('Mouse Out of square', square)}
      // onMouseOverSquare={(square) => console.log('Mouse Over square', square)}
      // onSquareClick={(square) => console.log('Square clicked', square)}
    />
  );
};

export default Chessboard;


