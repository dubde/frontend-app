import React from 'react';

import { useSelector } from 'react-redux';

import { Route } from '@frontend/models';
import { StartPage,GamePage, ScorePage } from '@frontend/containers';
import './app.css';
import { State } from '../store/reducers';
import { fetchNewGame, fetchOldGame, navigateTo } from '../store/actions';

export const App = () => {

  const getCurrentRoute = useSelector((state: State) => state.currentScreen);

  switch(getCurrentRoute) {

    case Route.ScorePage:
      return (
        <ScorePage />
      )
    case Route.GamePage:
      return (
        <GamePage />
      )
    case Route.StartPage:
    default:
      return (
        <StartPage
          fetchNewGame={fetchNewGame}
          fetchOldGame={fetchOldGame}
          navigateToScoreBoard={() => navigateTo(Route.ScorePage)}
        ></StartPage>
      );
  }

};

export default App;
