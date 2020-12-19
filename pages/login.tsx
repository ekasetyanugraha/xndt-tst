import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { withIronSession } from 'next-iron-session';
import PageContainer from 'components/PageContainer';
import sessionService from 'services/session';
import { cookieConfig } from 'helpers/ssr-helper';

export const getServerSideProps = withIronSession(
  async ({ req, res }) => {
    const user = req.session.get('user');

    if (user) {
      res.writeHead(301, {
        Location: '/',
      });
      res.end();
    }

    return {
      props: {},
    };
  },
  cookieConfig,
);

export default function Login( { user }) {
  const router = useRouter();
  const emailInput = useRef();
  const passwordInput = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailInput.current.value;
    const password = passwordInput.current.value;

    const response = await sessionService.login({ email, password });

    if (response) {
      return router.push('/');
    }
  };

  return (
    <PageContainer user={user}>
      <main className="container py-6">
        <article className="panel is-primary">
          <p className="panel-heading">Login</p>

          <div className="p-4">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input type="text" className="input" ref={emailInput} />
                </div>
              </div>
              <div className="field">
                <label className="label">
                  Password
                </label>
                <div className="control">
                  <input type="password" className="input" ref={passwordInput} />
                </div>
              </div>
              <div>
                <button type="submit" className="button is-primary is-fullwidth">Login</button>
              </div>
            </form>
          </div>
        </article>
      </main>
    </PageContainer>
  );
};
