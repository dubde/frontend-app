import React from 'react';
import { render } from '@testing-library/react';

import GamePage from './game-page';

describe(' GamePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GamePage />);
    expect(baseElement).toBeTruthy();
  });
});
