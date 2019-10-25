import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { Route } from '@frontend/models';
import { StartPage,GamePage, ScorePage } from '@frontend/containers';
import './app.css';
import { State } from '../store/reducers';
import { fetchNewGame, fetchOldGame, navigateTo, fetchHighScores, setMove, fetchUserMoves } from '../store/actions';

export const App = () => {

  const getCurrentRoute = useSelector((state: State) => state.currentScreen);
  const getScores = useSelector((state: State) => state.highScores);
  const getTable = useSelector((state: State) => state.tableBoard);
  const getGameId = useSelector((state: State) => state.gameId);
  const getUserName = useSelector((state: State) => state.currentUser)
  const areMovesReady = useSelector((state: State) => state.nextMoves.length > 2);
  const getNextMoves = useSelector(
    (state: State) => state.nextMoves
    );

  useEffect(
    () => {
      if(areMovesReady) {
        fetchUserMoves(getNextMoves, getGameId);
      }
    },
    [areMovesReady]
  );

  useEffect(
    () => {
      if(!!getGameId) {
        localStorage.setItem('gameToResume', getGameId)
      }
    },
    [getGameId]
  )

  useEffect(
    () => {
      if(!!getUserName) {
        localStorage.setItem('userToResume', getUserName)
      }
    },
    [getUserName]
  )

  switch(getCurrentRoute) {

    case Route.ScorePage:
      return (
        <ScorePage
          fetchScores={fetchHighScores}
          highScoresList={getScores}
          navigateToStart={() => navigateTo(Route.StartPage)}
         />
      )
    case Route.GamePage:
      return (
        <GamePage 
          table={getTable}
          onMoveHandler={setMove}
        />
      )
    case Route.StartPage:
    default:
      return (
        <StartPage
          fetchNewGame={fetchNewGame}
          fetchOldGame={fetchOldGame}
          navigateTo={navigateTo}
        ></StartPage>
      );
  }

};

export default App;
