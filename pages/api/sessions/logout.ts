import { withIronSession } from 'next-iron-session';
import { cookieConfig } from 'helpers/ssr-helper';

export default withIronSession(async (req, res) => {
  if (req.method === 'POST') {
    req.session.set('user', null);
    await req.session.save();
    return res.status(201).send('');
  }

  return res.status(404).send('');
}, cookieConfig);
