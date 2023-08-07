import {
  Piece,
  PieceAsObject,
  PieceSymbol,
  Color
} from './types';

export const getPieceAsObject = (piece: Piece): PieceAsObject => {
  const [color, type] = piece.split('');
  return {
    type: type.toLowerCase() as PieceSymbol,
    color: color as Color
  };
};
