import React from 'react';
import { render } from '@testing-library/react';

import Tile from '../tile/tile';
import { TileValue } from '@frontend/models';

describe(' Tile', () => {
  it('should render successfully', () => {
    const mockid = 'id';
    const mockValue = '' as TileValue;
    const mockHandler = () => undefined;
    const { baseElement } = render(
      <Tile id={mockid} value={mockValue} onClickHandler={mockHandler} />
    );
    expect(baseElement).toBeTruthy();
  });
});
