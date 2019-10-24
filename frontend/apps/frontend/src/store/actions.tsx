import { createAction } from 'redux-starter-kit';
import { Routes, HighScore, Moves } from '@frontend/models';

const API = 'http://localhost:9999/api/games';

export enum ActionTypes {
  CreateGame = '[API] Create new game for user',
  RestoreGame = '[API] Restore current game for user',
  TableInfoReceived = '[API] Current Table State received',
  GetHighScores = '[API] Get High Scores',
  HighScoresLoaded = '[API] High Scores list received',
  CheckNextMoves = '[API] Check next three moves',
  ApiError = '[API] Error',

  NavigateTo = '[Router] Navigate to page'
}

const createGame = createAction(ActionTypes.CreateGame, (userName: string) => ({
  payload: { userName }
}));

const restoreGame = createAction(
  ActionTypes.RestoreGame,
  (userName: string, gameId: string) => ({
    payload: {
      userName,
      gameId
    }
  })
);

const tableInfoReceived = createAction(
  ActionTypes.TableInfoReceived,
  (gameId: string, userName: string, tableBoard: string[][]) => ({
    payload: { gameId, userName, tableBoard }
  })
);

const getHighScores = createAction(ActionTypes.GetHighScores);

const highScoresLoaded = createAction(
  ActionTypes.HighScoresLoaded,
  (highScores: HighScore[]) => ({ payload: { highScores } })
);

const checkNextMoves = createAction(
  ActionTypes.CheckNextMoves,
  (moves: Moves) => ({
    payload: moves
  }));

const apiError = createAction(ActionTypes.ApiError, (message: string) => ({
  payload: message
}));

export const navigateTo = createAction(
  ActionTypes.NavigateTo,
  (destRoute: Routes) => ({ payload: destRoute })
);

export function fetchHighScores() {
  return function(dispatch) {
    dispatch(apiActions.getHighScores());
    return fetch(API, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(
        response => dispatch(apiActions.highScoresLoaded(response)),
        error => dispatch(apiActions.apiError(error))
      );
  };
}

export function fetchNewGame(userName: string) {
  return function(dispatch) {
    dispatch(apiActions.createGame(userName));
    return fetch(API + '?userName=' + userName, {
      method: 'POST'
    })
      .then(response => response.json())
      .then(
        ({ userName, gameId, tableBoard }) => dispatch(apiActions.tableInfoReceived(userName, gameId, tableBoard)),
        error => dispatch(apiActions.apiError(error))
      );
  };
}

export function fetchOldGame(userName, gameId) {
  return function(dispatch) {
    dispatch(apiActions.restoreGame(userName, gameId));
    return fetch(API + '?userName=' + userName + '&gameId=' + gameId, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(
        ({ userName, gameId, tableBoard }) =>
          dispatch(apiActions.tableInfoReceived(userName, gameId, tableBoard)),
        error => dispatch(apiActions.apiError(error))
      );
  };
}

export function fetchUserMoves(moves: Moves, gameId: string) {
  return function(dispatch) {
    dispatch(apiActions.checkNextMoves(moves));
    return fetch(API + '/' + gameId + '/positions',
    {
      method: 'POST',
      body: moves.toString()
    })
      .then(response => response.json())
      .then(
        response => dispatch(apiActions.highScoresLoaded(response)),
        error => dispatch(apiActions.apiError(error))
      );
  };
}

export const apiActions = {
  createGame,
  restoreGame,
  tableInfoReceived,
  getHighScores,
  highScoresLoaded,
  checkNextMoves,
  apiError
};
