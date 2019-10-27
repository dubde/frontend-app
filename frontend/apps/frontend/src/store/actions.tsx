import { createAction, Action } from 'redux-starter-kit';

import { ThunkAction } from 'redux-thunk';

import {
  Routes,
  HighScore,
  Moves,
  MovesResponses,
  Move,
  TileValue
} from '@frontend/models';
import { State } from './reducers';

const API = 'http://localhost:8080/api/games';

export type AppThunk = ThunkAction<void, State, null, Action<string>>;

export enum ActionTypes {
  CreateGame = '[API] Create new game for user',
  RestoreGame = '[API] Restore game',
  GameInfoReceived = '[API] Current Game Id received',
  GetHighScores = '[API] Get High Scores',
  HighScoresLoaded = '[API] High Scores list received',
  CheckNextMoves = '[API] Check next three moves',
  NextMovesResponseLoaded = '[API] Response for next three moves laoded',
  ApiError = '[API] Error',

  SetMove = '[Game] Set next move coordinates',
  NavigateTo = '[Router] Navigate to page'
}

const createGame = createAction(ActionTypes.CreateGame, (userName: string) => ({
  payload: { userName }
}));

const restoreGame = createAction(
  ActionTypes.RestoreGame,
  (userName: string, gameId: string, tableConfiguration: TileValue[][]) => ({
    payload: {
      userName,
      gameId,
      tableConfiguration
    }
  })
);

const gameInfoReceived = createAction(
  ActionTypes.GameInfoReceived,
  (gameId: string) => ({
    payload: { gameId }
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
  })
);

const nextMovesResponseLoaded = createAction(
  ActionTypes.NextMovesResponseLoaded,
  (responses: MovesResponses) => ({
    payload: responses
  })
);

const apiError = createAction(ActionTypes.ApiError, (message: string | any) => ({
  payload: message + ''
}));

export const navigateTo = createAction(
  ActionTypes.NavigateTo,
  (destRoute: Routes) => ({ payload: destRoute })
);

export const setMove = createAction(ActionTypes.SetMove, (move: Move) => ({
  payload: move
}));

export function fetchHighScores(): AppThunk {
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

export function fetchNewGame(userName: string): AppThunk {
  return function(dispatch) {
    dispatch(apiActions.createGame(userName));
    return fetch(API + '?userName=' + userName, {
      method: 'POST'
    })
      .then(response => response.json())
      .then(
        ({ gameId }) =>
          dispatch(apiActions.gameInfoReceived(gameId)),
        error => dispatch(apiActions.apiError(error))
      );
  };
}

export function restoreOldGame(userName, oldGameId, tableConfiguration: TileValue[][]): AppThunk {
  return function(dispatch) {
    return fetch(API + '?userName=' + userName, {
      method: 'POST'
    })
      .then(response => response.json())
      .then(
        ({ userName, gameId }) => oldGameId === gameId ? 
          dispatch(apiActions.restoreGame(userName, gameId, tableConfiguration)) : 
          dispatch(apiActions.gameInfoReceived(gameId)),
        error => dispatch(apiActions.apiError(error))
      ); 
  }
}

export function fetchUserMoves(moves: Moves, gameId: string): AppThunk {
  return function(dispatch) {
    dispatch(apiActions.checkNextMoves(moves));
    return fetch(API + '/' + gameId + '/positions', {
      method: 'POST',
      body: moves.map((move: Move) => move.rowIndex + ',' + move.colIndex).join('|').toString()
    })
      .then(response => response.json())
      .then(
        response => dispatch(apiActions.nextMovesResponseLoaded(response)),
        error => dispatch(apiActions.apiError(error))
      );
  };
}

export const apiActions = {
  createGame,
  restoreGame,
  gameInfoReceived,
  getHighScores,
  highScoresLoaded,
  checkNextMoves,
  nextMovesResponseLoaded,
  apiError
};
