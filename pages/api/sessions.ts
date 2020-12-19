import { withIronSession } from 'next-iron-session';

const VALID_EMAIL = 'ekasetyanugraha@gmail.com';
const VALID_PASSWORD = 'supersecretpassword';

export default withIronSession(
  async (req, res) => {
    if (req.method === 'POST') {
      const { email, password } = req.body;

      if (email === VALID_EMAIL && password === VALID_PASSWORD) {
        req.session.set('user', { email });
        await req.session.save();
        return res.status(201).send('');
      }

      return res.status(403).send('');
    }

    return res.status(404).send('');
  },
  {
    cookieName: 'xndt_cookie',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production' ? true : false
    },
    password: process.env.APPLICATION_SECRET,
  }
);
