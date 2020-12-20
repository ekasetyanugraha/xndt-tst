import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormLogin from '.';

describe('Component: FormLogin', () => {
  it('should render without onSubmit props', () => {
    render(<FormLogin />);

    expect(screen.getByTestId('form')).toBeTruthy();
  });

  it('should submit form with proper payload', () => {
    const mockOnSubmit = jest.fn();
    const mockEmail = 'test@mail.com';
    const mockPassword = 'secretpassword';

    render(<FormLogin onSubmit={mockOnSubmit} />);

    userEvent.type(screen.getByTestId('input-email'), mockEmail);
    userEvent.type(screen.getByTestId('input-password'), mockPassword);
    userEvent.click(screen.getByTestId('btn-submit'));

    expect(mockOnSubmit).toHaveBeenCalledWith({
      email: mockEmail,
      password: mockPassword,
    });
  });
});
