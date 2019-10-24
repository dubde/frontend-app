import React from 'react';
import { render } from '@testing-library/react';

import ScorePage from './score-page';

describe(' ScorePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScorePage />);
    expect(baseElement).toBeTruthy();
  });
});
