import { useRouter } from 'next/router';
import { withIronSession } from 'next-iron-session';
import PageContainer from 'components/PageContainer';
import Panel from 'components/Panel';
import FormLogin from 'components/FormLogin';
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

  const onSubmitFormLogin = async payload => {
    const response = await sessionService.login(payload);

    if (response) {
      return router.push('/');
    }
  };

  return (
    <PageContainer user={user}>
      <main className="container py-6">
        <Panel title="Welcome to UniversityDB">
          <FormLogin onSubmit={onSubmitFormLogin} />
        </Panel>
      </main>
    </PageContainer>
  );
};
