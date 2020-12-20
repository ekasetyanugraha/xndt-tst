import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Component: Footer', () => {
  it('should match snapshot', () => {
    render(<Footer />);

    expect(screen.getByTestId('footer')).toMatchSnapshot();
  });
});
