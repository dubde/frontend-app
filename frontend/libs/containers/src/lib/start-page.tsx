import React, { useState } from 'react';

import { Route, TileValue } from '@frontend/models';

import './start-page.css';

/* eslint-disable-next-line */
export interface StartPageProps {
  fetchNewGame: (userName: string) => void;
  restoreOldGame: (
    userName: string,
    gameId: string,
    tableState: TileValue[][]
  ) => void;
  navigateTo: (route: Route) => void;
}

export const StartPage = (props: StartPageProps) => {
  const [valueUserName, setUserNameState] = useState('');
  const resumeGameId = localStorage.getItem('gameToResume');
  const userName = localStorage.getItem('userToResume');
  const resumeGameState = fromStringToMatrix(localStorage.getItem('gameState'));

  const onChange = event => setUserNameState(event.target.value);

  const startNewGame = (userName: string) => {
    props.fetchNewGame(userName);
    props.navigateTo(Route.GamePage);
  };

  const restoreOldGame = () => {
    props.restoreOldGame(userName, resumeGameId, resumeGameState);
    props.navigateTo(Route.GamePage);
  };

  const goToScoreBoard = () => props.navigateTo(Route.ScorePage);
  const userInputValue = () => valueUserName || userName || '';

  return (
    <div className="container">
      <div className="row">
        <div className="col align-self-center">
          <h2>Welcome to the game</h2>
        </div>
      </div>
      <div className="row">
        <div className="col align-self-center form-group">
          <label htmlFor="usr">Set your username</label>
          <input
            id="usr"
            type="text"
            className="input-sm form-control"
            value={userInputValue()}
            onChange={onChange}
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col align-self-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => startNewGame(valueUserName || userName)}
          >
            Start to play
          </button>
        </div>
      </div>
      {!!userName && !!resumeGameId ? (
        <div className="row">
          <div className="col align-self-center">
            <label>An open game is present do you want to restore it?</label>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => startNewGame(userName)}
            >
              Restore
            </button>
          </div>
        </div>
      ) : null}
      <div className="row">
        <div className="col align-self-center">
          <button
            type="button"
            className="btn btn-link"
            onClick={() => goToScoreBoard()}
          >
            ScoreBoard
          </button>
        </div>
      </div>
    </div>
  );
};

function fromStringToMatrix(tableString: string): TileValue[][] {
  const matrix = !!tableString ? tableString
    .split('|')
    .map((subArray: string) =>
      subArray.split(',').map(tileValue => tileValue as TileValue)
    ) : [[]];
  return matrix;
}

export default StartPage;
