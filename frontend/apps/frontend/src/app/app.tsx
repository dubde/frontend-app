import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Route, Move, TileValue } from '@frontend/models';
import { StartPage, GamePage, ScorePage } from '@frontend/containers';
import './app.css';
import { State } from '../store/reducers';
import {
  fetchNewGame,
  navigateTo,
  fetchHighScores,
  setMove,
  fetchUserMoves,
  restoreOldGame
} from '../store/actions';

export const App = () => {
  const dispatch = useDispatch();

  const getCurrentRoute = useSelector((state: State) => state.currentScreen);
  const getScores = useSelector((state: State) => state.highScores);
  const getTable = useSelector((state: State) => state.tableBoard);
  const getGameId = useSelector((state: State) => state.gameId);
  const getUserName = useSelector((state: State) => state.currentUser);
  const areMovesReady = useSelector(
    (state: State) => state.nextMoves.length > 2
  );
  const getNextMoves = useSelector((state: State) => state.nextMoves);

  useEffect(() => {
    if (areMovesReady) {
      dispatch(fetchUserMoves(getNextMoves, getGameId));
    }
  }, [areMovesReady, getGameId]);

  useEffect(() => {
    if (!!getGameId) {
      localStorage.setItem('gameToResume', getGameId);
    }
  }, [getGameId]);

  useEffect(() => {
    if (!!getUserName) {
      localStorage.setItem('userToResume', getUserName);
    }
  }, [getUserName]);

  useEffect(() => {
    if (!!getTable) {
      localStorage.setItem(
        'gameState',
        getTable.map(tiles => tiles.toString()).join('|')
      );
    }
  }, [getTable]);

  switch (getCurrentRoute) {
    case Route.ScorePage:
      return (
        <ScorePage
          fetchScores={() => dispatch(fetchHighScores())}
          highScoresList={getScores}
          navigateToStart={() => dispatch(navigateTo(Route.StartPage))}
        />
      );
    case Route.GamePage:
      return (
        <GamePage
          table={getTable}
          onMoveHandler={(move: Move) => dispatch(setMove(move))}
        />
      );
    case Route.StartPage:
    default:
      return (
        <StartPage
          fetchNewGame={(userName: string) => dispatch(fetchNewGame(userName))}
          restoreOldGame={(
            userName: string,
            gameId: string,
            tableState: TileValue[][]
          ) => dispatch(restoreOldGame(userName, gameId, tableState))}
          navigateTo={(route: Route) => dispatch(navigateTo(route))}
        ></StartPage>
      );
  }
};

export default App;
