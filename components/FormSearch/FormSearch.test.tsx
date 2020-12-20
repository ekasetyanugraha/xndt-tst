import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormSearch from '.';

describe('Component: FormSearch', () => {
  it('should render without onSubmit props', () => {
    render(<FormSearch />);

    expect(screen.getByTestId('form')).toBeTruthy();
  });

  it('should submit form with proper payload', () => {
    const mockOnSubmit = jest.fn();
    const mockInput = 'Test name';

    render(<FormSearch onSubmit={mockOnSubmit} />);

    userEvent.type(screen.getByTestId('input-name'), mockInput);
    userEvent.click(screen.getByTestId('btn-submit'));

    expect(mockOnSubmit).toHaveBeenCalledWith({
      name: mockInput,
    });
  });
});
