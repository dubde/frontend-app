import React, { useState } from 'react';

import { Route } from '@frontend/models';

import './start-page.css';

/* eslint-disable-next-line */
export interface StartPageProps {
  fetchNewGame;
  fetchOldGame;
  navigateTo;
}

export const StartPage = (props: StartPageProps) => {
  const [valueUserName, setUserNameState] = useState(null);
  const resumeGameId = localStorage.getItem('gameToResume');
  const userName = localStorage.getItem('userToResume');
  const onChange = event => setUserNameState(event.target.value);

  const resumeOldGame = (userName: string, resumeGameId: string) => {
    props.fetchOldGame(userName, resumeGameId);
    props.navigateTo(Route.GamePage);
  };

  const startNewGame = (userName: string) => {
    console.log(userName);
    props.fetchNewGame(userName);
    props.navigateTo(Route.GamePage);
  };

  const goToScoreBoard = () => props.navigateTo(Route.ScorePage);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2>Welcome to the game</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 form-group">
          <label htmlFor="usr">Set your username</label>
          <input
            id="usr"
            type="text"
            className="input-sm form-control"
            value={valueUserName || userName}
            onChange={onChange}
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
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
          <div className="col-lg-8">
            <label>An open game is present do you want to restore it?</label>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => resumeOldGame(userName, resumeGameId)}
            >
              Restore
            </button>
          </div>
        </div>
      ) : null}
      <div className="row">
        <button
          type="button"
          className="btn btn-link"
          onClick={() => goToScoreBoard()}
        >
          ScoreBoard
        </button>
      </div>
    </div>
  );
};

export default StartPage;
