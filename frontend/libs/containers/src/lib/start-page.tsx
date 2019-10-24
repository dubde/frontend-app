import React from 'react';

import { getLastGameAndUser } from '@frontend/services';
import './start-page.css';

/* eslint-disable-next-line */
export interface StartPageProps {
  fetchNewGame;
  fetchOldGame;
  navigateToScoreBoard;
}

export const StartPage = (props: StartPageProps) => {

  let inputRef;
  const { lastUser, lastGame } = getLastGameAndUser();

  return (
    <div className="StartPage">
      <h2>Welcome to the game</h2>
      <div>
        <p>Set your username</p>
        <input
          defaultValue={lastUser}
          ref={input => (inputRef = input)}
        ></input>
        <button onClick={props.fetchNewGame(inputRef.value)}>
          Start to play
        </button>
      </div>
      { !!lastUser && !!lastGame ? (
        <div>
          <p>An open game is present do you want to restore it?</p>
          <button onClick={props.fetchOldGame(lastUser, lastGame)}>Restore</button>
        </div>
      ) : null}
      <div>
        <button onClick={props.navigateToScoreBoard()}>ScoreBoard</button>
      </div>
    </div>
  );
};

export default StartPage;
