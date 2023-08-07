import type { PieceSymbol, Color, Square } from 'chess.js';
import type { Piece, Position } from 'chessboardjsx';

export type Fen = string;
export type BoardOrientation = 'white' | 'black';

export interface Move {
  piece: Piece;
  sourceSquare: Square | 'spare';
  targetSquare: Square;
}

export interface PieceAsObject {
  color: Color;
  type: PieceSymbol
}

export {
  Square,
  Piece,
  Position,
  PieceSymbol,
  Color
};
export { DEFAULT_POSITION } from 'chess.js';
