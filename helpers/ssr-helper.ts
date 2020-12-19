import { withIronSession } from 'next-iron-session';

export const cookieConfig = {
  cookieName: process.env.APPLICATION_COOKIE,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production'
  },
  password: process.env.APPLICATION_SECRET,
};

export const getServerSideProps = withIronSession(
  async ({ req }) => {
    const user = req.session.get('user');

    if (!user) {
      return {
        props: {},
      };
    }

    return {
      props: {
        user,
      },
    };
  },
  cookieConfig,
);
