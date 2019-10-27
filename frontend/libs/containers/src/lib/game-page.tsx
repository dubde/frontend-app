import React from 'react';

import './game-page.css';
import { Board } from '@frontend/components';
import { TileValue, Move } from '@frontend/models';

/* eslint-disable-next-line */
export interface GamePageProps {
  table: TileValue[][];
  onMoveHandler: (move: Move) => void;
}

export const GamePage = (props: GamePageProps) => {

  return (
    <div className="container">
      <div className="row">
        <div className="col align-self-center">
          <h1>Game on!</h1>
        </div>
      </div>
      <div className="row">
        <div className="col align-self-center">
            <Board 
              board={props.table}
              onTileClickHandler={props.onMoveHandler}
            />
        </div>
      </div>
    </div>
  );
};

export default GamePage;
