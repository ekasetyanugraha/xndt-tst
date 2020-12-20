import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '.';

describe('Component: Hero', () => {
  it('should render properly without subtitle', () => {
    const mockTitle = 'Test Title';

    render(<Hero title={mockTitle} />);

    expect(screen.getByTestId('title').textContent).toBe(mockTitle);
  });

  it('should render properly with subtitle', () => {
    const mockSubtitle = 'Test Subtitle';

    render(<Hero title="Test Title" subtitle={mockSubtitle} />);

    expect(screen.getByTestId('subtitle').textContent).toBe(mockSubtitle);
  });
});
