import React from 'react';
import { render, screen } from '@testing-library/react';
import PageContainer from '.';

describe('Component: PageContainer', () => {
  it('should have Navbar', () => {
    render(<PageContainer />);

    expect(screen.getByRole('navigation')).toBeTruthy();
  });

  it('should have Footer', () => {
    render(<PageContainer />);

    expect(screen.getByTestId('footer')).toBeTruthy();
  });

  it('should render children', () => {
    render(
      <PageContainer>
        <div data-testid="children">Test Children</div>
      </PageContainer>,
    );

    expect(screen.getByTestId('children')).toBeTruthy();
  });
});
