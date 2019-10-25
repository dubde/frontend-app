import React from 'react';

import './game-page.css';
import { Board } from '@frontend/components';
import { TileValue, Move } from '@frontend/models';

/* eslint-disable-next-line */
export interface GamePageProps {
  table: TileValue[][];
  onMoveHandler: (move: Move) => any;
}

export const GamePage = (props: GamePageProps) => {


  return (
    <div>
      <h1>Welcome to game-page component!</h1>
      <br/>
      <Board 
        board={props.table}
        onTileClickHandler={props.onMoveHandler}
      />
    </div>
  );
};

export default GamePage;
