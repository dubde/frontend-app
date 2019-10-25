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
  const [valueUserName, setUserNameState] = useState('');
  const resumeGameId  = localStorage.getItem('gameToResume');
  const userName  = localStorage.getItem('userToResume');
  const onChange = event => setUserNameState(event.target.value);

  const resumeOldGame = (userName: string, resumeGameId: string) => {
    props.fetchOldGame(userName, resumeGameId);
    props.navigateTo(Route.GamePage);
  };

  const startNewGame = (userName: string) => {
    props.fetchNewGame(userName);
    props.navigateTo(Route.GamePage);
  }

  const goToScoreBoard = () => props.navigateTo(Route.ScorePage);

  return (
    <div className="StartPage">
      <h2>Welcome to the game</h2>
      <div>
        <p>Set your username</p>
        <input
          value={valueUserName}
          defaultValue={userName}
          onChange={onChange}
        ></input>
        <button onClick={() => startNewGame(valueUserName || userName)}>
          Start to play
        </button>
      </div>
      {!!userName && !!resumeGameId ? (
        <div>
          <p>An open game is present do you want to restore it?</p>
          <button onClick={() => resumeOldGame(userName, resumeGameId)}>
            Restore
          </button>
        </div>
      ) : null}
      <div>
        <button onClick={() => goToScoreBoard()}>ScoreBoard</button>
      </div>
    </div>
  );
};

export default StartPage;
