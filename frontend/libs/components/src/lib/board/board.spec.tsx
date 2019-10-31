import React from 'react';
import { render } from '@testing-library/react';

import Board from './board';
import { Move } from '@frontend/models';

describe(' Board', () => {
  it('should render successfully', () => {
    const mockBoard = [[]];
    const mockHandler = (move: Move) => undefined;

    const { baseElement } = render(
      <Board board={mockBoard} onTileClickHandler={mockHandler} />
    );
    expect(baseElement).toBeTruthy();
  });
});
