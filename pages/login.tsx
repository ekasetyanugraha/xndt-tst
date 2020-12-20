import React from 'react';
import { useRouter } from 'next/router';
import { withIronSession } from 'next-iron-session';
import { User } from 'interfaces/user';
import { cookieConfig } from 'helpers/ssr-helper';
import PageContainer from 'components/PageContainer';
import Panel from 'components/Panel';
import FormLogin from 'components/FormLogin';
import sessionService from 'services/session';

export const getServerSideProps = withIronSession(async ({ req, res }) => {
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
}, cookieConfig);

interface Props {
  user?: User;
}

export default function Login({ user }: Props): JSX.Element {
  const router = useRouter();

  const onSubmitFormLogin = async (payload) => {
    const response = await sessionService.login(payload);

    if (response) {
      return router.push('/');
    }
  };

  return (
    <PageContainer user={user}>
      <main className="container py-6">
        <div className="columns">
          <div className="column is-4 is-offset-4">
            <Panel title="Welcome to UniversityDB">
              <FormLogin onSubmit={onSubmitFormLogin} />
            </Panel>
          </div>
        </div>
      </main>
    </PageContainer>
  );
}
