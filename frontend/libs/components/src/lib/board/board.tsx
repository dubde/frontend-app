import React from 'react';

import Tile from '../tile/tile';
import { TileValue, Move } from '@frontend/models';

export interface BoardProps {
  board: TileValue[][];
  onTileClickHandler: (move: Move) => any;
}

export const Board = (props: BoardProps) => {
  const nRows = !!props.board ? props.board.length : 0;

  const rows = new Array(nRows).fill('').map((row, rowIndex) => {

    const nColumns = props.board[rowIndex].length;

    return <tr key={rowIndex.toString()}>
      {new Array(nColumns).fill('').map((col, colIndex) =>
        Tile({
          id: (rowIndex * nRows + colIndex).toString(),
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
    <table className="table table-bordered table-primary">
      <tbody>{rows}</tbody>
    </table>
  );
};

export default Board;
