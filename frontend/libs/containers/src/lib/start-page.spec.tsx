import React from 'react';
import { render } from '@testing-library/react';

import StartPage from './start-page';

describe(' StartPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StartPage />);
    expect(baseElement).toBeTruthy();
  });
});
