import { TileValue } from './tile-values.model';

export interface Move {
    rowIndex: string;
    colIndex: string;
}

export type Moves = Move[];

export interface MoveResponse extends Move {
    response: TileValue;
}

export type MovesResponses = MoveResponse[];