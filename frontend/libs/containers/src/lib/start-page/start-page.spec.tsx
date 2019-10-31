import React from 'react';
import { render } from '@testing-library/react';

import StartPage from './start-page';
import { TileValue, Route } from '@frontend/models';

describe(' StartPage', () => {
  it('should render successfully', () => {
    const mockFetchNewGame = (userName: string) => undefined;
    const mockRestoreOldGame = (
      userName: string,
      gameId: string,
      tableState: TileValue[][]
    ) => undefined;
    const mockNavigateTo = (route: Route) => undefined;

    const { baseElement } = render(
      <StartPage
        fetchNewGame={mockFetchNewGame}
        restoreOldGame={mockRestoreOldGame}
        navigateTo={mockNavigateTo}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
