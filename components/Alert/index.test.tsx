import React from 'react';
import { render, screen } from '@testing-library/react';
import Alert from './index';

describe('Alert', () => {
  it('should match snapshot', () => {
    const { container } = render(<Alert />);
    expect(container).toMatchSnapshot();
  });
});
