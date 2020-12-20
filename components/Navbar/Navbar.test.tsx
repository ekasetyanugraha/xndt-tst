import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '.';

describe('Component: Navbar', () => {
  it('should show login button when there is no user props', () => {
    render(<Navbar />);

    expect(screen.queryByTestId('btn-login')).toBeTruthy();
  });

  it('should not show login button when there is user props', () => {
    render(<Navbar user={{ email: 'test@email.com' }} />);

    expect(screen.queryByTestId('btn-login')).toBeNull();
  });
});
