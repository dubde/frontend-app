import React from 'react';
import { render } from '@testing-library/react';

import GamePage from './game-page';
import { Move } from '@frontend/models';

describe(' GamePage', () => {
  it('should render successfully', () => {
    const mockTable = [[]];
    const onMoveHandler = (move: Move) => undefined

    const { baseElement } = render(
      <GamePage table={mockTable} onMoveHandler={onMoveHandler} />
    );
    expect(baseElement).toBeTruthy();
  });
});
