import React from 'react';
import { useRouter } from 'next/router';
import { User } from 'interfaces/user';
import sessionService from 'services/session';

interface Props {
  user?: User;
}

export default function Navbar({ user }: Props): JSX.Element {
  const router = useRouter();

  const onClickLogout = async () => {
    await sessionService.logout();

    return router.push('/');
  };

  return (
    <nav className="navbar box m-0" role="navigation" aria-label="main navigation">
      <div className="navbar-menu container">
        <div className="navbar-start">
          <a href="/" className="navbar-item">
            Home
          </a>
        </div>

        {user ? (
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">{user.email}</a>
              <div className="navbar-dropdown is-right">
                <a className="navbar-item" onClick={onClickLogout}>
                  Logout
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a href="/login" className="button is-primary" data-testid="btn-login">
                  <strong>Login</strong>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
