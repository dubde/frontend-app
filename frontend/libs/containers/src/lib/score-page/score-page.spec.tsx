import React from 'react';
import { render } from '@testing-library/react';

import ScorePage from './score-page';

describe(' ScorePage', () => {
  it('should render successfully', () => {
    const mockFetchScores = () => undefined;
    const mockNavigateToStart = () => undefined;
    const mockHighScores = [];

    const { baseElement } = render(
      <ScorePage
        fetchScores={mockFetchScores}
        navigateToStart={mockNavigateToStart}
        highScoresList={mockHighScores}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
