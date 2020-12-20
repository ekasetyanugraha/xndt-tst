import React from 'react';
import { useRouter } from 'next/router';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import sessionService from 'services/session';
import PageLogin from 'pages/login';

jest.mock('next/router');
jest.mock('services/session');

const mockLogin = sessionService.login as jest.Mock;
const mockUseRouter = useRouter as jest.Mock;
const mockRouterPush = jest.fn();

mockUseRouter.mockReturnValue({
  push: mockRouterPush,
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Page: PageContainer', () => {
  beforeEach(() => {
    render(<PageLogin />);
  });

  it('should have Navbar', async () => {
    const navigation = await screen.findByRole('navigation');

    expect(navigation).toBeTruthy();
  });

  it('should have Footer', async () => {
    const footer = await screen.findByTestId('footer');

    expect(footer).toBeTruthy();
  });

  describe('on successful login', () => {
    const mockEmail = 'test@mail.com';
    const mockPassword = 'secretpassword';

    beforeEach(() => {
      mockLogin.mockResolvedValue({});

      userEvent.type(screen.getByTestId('input-email'), mockEmail);
      userEvent.type(screen.getByTestId('input-password'), mockPassword);
      userEvent.click(screen.getByTestId('btn-submit'));
    });

    it('should call login API with proper payload', () => {
      expect(mockLogin).toHaveBeenCalledWith({
        email: mockEmail,
        password: mockPassword,
      });
    });

    it('should redirect to index page', () => {
      waitFor(() => {
        expect(mockRouterPush).toHaveBeenLastCalledWith('/');
      });
    });
  });

  describe('on failed login', () => {
    const mockEmail = 'test@mail.com';
    const mockPassword = 'secretpassword';

    beforeEach(() => {
      mockLogin.mockRejectedValue({});

      userEvent.type(screen.getByTestId('input-email'), mockEmail);
      userEvent.type(screen.getByTestId('input-password'), mockPassword);
      userEvent.click(screen.getByTestId('btn-submit'));
    });

    it('should call login API with proper payload', () => {
      expect(mockLogin).toHaveBeenCalledWith({
        email: mockEmail,
        password: mockPassword,
      });
    });

    it('should not redirect to index page', () => {
      waitFor(() => {
        expect(mockRouterPush).not.toHaveBeenCalled();
      });
    });
  });
});
