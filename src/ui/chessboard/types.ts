import type {
  PieceSymbol as IChessPieceSymbol,
  Color as IChessColor,
  Square as IChessSquare
} from 'chess.js';
export { DEFAULT_POSITION } from 'chess.js';
import type {
  Piece as IChessPiece,
  Position as IChessPosition
} from 'chessboardjsx';

export type IChessFen = string;
export type IChessboardOrientation = 'white' | 'black';

export interface IChessMove {
  piece: IChessPiece;
  sourceSquare: IChessSquare | 'spare';
  targetSquare: IChessSquare;
}

export interface IChessPieceAsObject {
  color: IChessColor;
  type: IChessPieceSymbol
}

export {
  IChessSquare,
  IChessPiece,
  IChessPosition,
  IChessPieceSymbol,
  IChessColor
};
