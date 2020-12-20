import { User } from 'interfaces/user';
import React from 'react';

interface Props {
  user?: User;
}

export default function Navbar({ user }: Props): JSX.Element {
  return (
    <nav className="navbar box m-0" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu container">
        <div className="navbar-start">
          <a href="/" className="navbar-item">
            Home
          </a>

          <a href="/search" className="navbar-item">
            Search
          </a>

          <a className="navbar-item">Something</a>
        </div>

        {user ? (
          <div className="navbar-end">
            <div className="navbar-item">{user.email}</div>
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
