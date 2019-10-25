import React from 'react';

import './board.css';
import Tile from './tile';
import { TileValue, Move } from '@frontend/models';

export interface BoardProps {
  board: TileValue[][];
  onTileClickHandler: (move: Move) => any;
}

export const Board = (props: BoardProps) => {
  const nRows = props.board.length;;

  const rows = new Array(nRows).map((row, rowIndex) => {

    const nColumns = props.board[rowIndex].length;

    return <tr>
      {new Array(nColumns).map((col, colIndex) =>
        Tile({
          value: props.board[rowIndex][colIndex],
          onClickHandler: () =>
            props.onTileClickHandler({
              rowIndex: rowIndex.toString(),
              colIndex: colIndex.toString()
            })
        })
      )}
    </tr>
  });

  return (
    <div>
      <table>{rows}</table>
    </div>
  );
};

export default Board;
