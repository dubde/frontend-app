import { createReducer, createSlice } from 'redux-starter-kit';

import { ActionTypes } from './actions';
import { Routes, Route, HighScore } from '@frontend/models';

export interface State {
  currentUser: string;
  currentScreen: Routes;
  highScores: HighScore[];
  gameId: string;
  tableBoard: string[][];
  isLoading: boolean;
  loaded: boolean;
  error?: string;
}

export const initialState = {
  currentUser: null,
  currentScreen: Route.StartPage,
  highScores: [],
  gameId: null,
  tableBoard: null,
  isLoading: false,
  loaded: false
} as State;

export const reducer = createReducer(initialState, {
  [ActionTypes.CreateGame]: (state, action) => handleCreateGame(state, action),
  [ActionTypes.RestoreGame]: (state, action) => handleRestoreGame(state, action),
  [ActionTypes.TableInfoReceived]: (state, action) => handleTableInfoReceived(state, action),
  [ActionTypes.CheckNextMoves]: (state, action) => handleCheckNextMoves(state, action),
  [ActionTypes.GetHighScores]: (state, action) => handleGetHighScores(state, action),
  [ActionTypes.HighScoresLoaded]: (state, action) => handleHighScoresLoaded(state, action),
  [ActionTypes.ApiError]: (state, action) => handleApiError(state, action),
  [ActionTypes.NavigateTo]: (state, action) => handleNavigateTo(state, action)
});

function handleCreateGame(state: State, action): State {
  return {
    ...state,
    currentUser: action.payload.userName,
    isLoading: true,
    loaded: false,
    error: undefined,
    gameId: null,
    tableBoard: null
  };
}

function handleRestoreGame(state: State, action): State {
  return {
    ...handleCreateGame(state, action),
    gameId: action.payload.gameId
  };
}

function handleTableInfoReceived(state: State, action): State {
    return {
        ...state,
        tableBoard: action.payload.tableBoard,
        isLoading: false,
        loaded: true,
    };
}

function handleCheckNextMoves(state: State, action): State {
    return {
        ...state,
        isLoading: true,
        loaded: false,
        error: undefined
    };
}

function handleGetHighScores(state: State, action): State {
    return {
        ...state,
        highScores: [],
        isLoading: true,
        loaded: false,
        error: undefined
    };
}

function handleHighScoresLoaded(state: State, action): State {
    return {
        ...state,
        highScores: action.payload.highScores,
        isLoading: false,
        loaded: true
    };
}

function handleApiError(state: State, action): State {
    return {
        ...state,
        isLoading: false,
        loaded: false,
        error: action.payload
    };
}

function handleNavigateTo(state: State, action): State {
    return { 
        ...state,
        currentScreen: action.payload
    };
}

