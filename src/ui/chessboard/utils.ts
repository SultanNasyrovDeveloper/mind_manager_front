import {
  IChessPiece,
  IChessPieceAsObject,
  IChessPieceSymbol,
  IChessColor
} from './types';

export const getPieceAsObject = (piece: IChessPiece): IChessPieceAsObject => {
  const [color, type] = piece.split('');
  return {
    type: type.toLowerCase() as IChessPieceSymbol,
    color: color as IChessColor
  };
};
