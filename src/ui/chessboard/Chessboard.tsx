import React, { FC, useState, useCallback, useEffect } from 'react';
import { Chess, DEFAULT_POSITION } from 'chess.js';
import {
  default as BaseChessboard,
  Props as BaseChessboardProps
} from 'chessboardjsx';
import { Move, Fen, Square } from './types';
import { getPieceAsObject } from './utils';

export interface ChessboardProps
  extends BaseChessboardProps {
  position?: Fen;
  isEditMode?: boolean;
  onPositionChange?: (fen: Fen) => void;
}

const Chessboard: FC<ChessboardProps> = ({
  position = DEFAULT_POSITION,
  isEditMode = false,
  onPositionChange,
  ...boardProps
}) => {
  const [boardPosition, setBoardPosition] = useState<Fen>(DEFAULT_POSITION);
  const [chess, setChess] = useState<Chess>(new Chess(boardPosition));

  const handlePieceDrop = useCallback((move: Move) => {
    if (!isEditMode) {
      try {
        chess.move({ from: move.sourceSquare, to: move.targetSquare });
        setBoardPosition(chess.fen())
      }
      finally {
        return;
      }
    }
    if (move.sourceSquare !== 'spare') chess.remove(move.sourceSquare);
    chess.put(getPieceAsObject(move.piece), move.targetSquare);
    setBoardPosition(chess.fen());
  }, [isEditMode, chess]);

  const handleSquareRightClick = useCallback((square: Square) => {
    if (isEditMode && chess.get(square)) {
      chess.remove(square);
      setBoardPosition(chess.fen());
    }
  }, [isEditMode, chess]);

  useEffect(() => {
    setBoardPosition(position);
    setChess(new Chess(position));
  }, [position]);
  
  const initRoughSquare = (
    { squareElement }: { squareElement: SVGElement, squareWidth: number }
  ) => {
    console.log('Initializing rough square: ', squareElement);
    squareElement.onclick = () => { console.log('Square clicked')}
    squareElement.addEventListener('drag', (e) => console.log('Drag', e))
  }

  return (
    <BaseChessboard
      {...boardProps}
      sparePieces={isEditMode}
      position={boardPosition}
      roughSquare={initRoughSquare}
      onDrop={handlePieceDrop}
      onDragOverSquare={(square) => console.log(`dragged over. ${square}`)}
      // onMouseOutSquare={(square) => console.log('Mouse Out of square', square)}
      // onMouseOverSquare={(square) => console.log('Mouse Over square', square)}
      onPieceClick={(piece) => console.log(`${piece} clicked`)}
      onSquareClick={(square) => console.log('Square clicked', square)}
      onSquareRightClick={handleSquareRightClick}
    />
  );
};

export default Chessboard;


