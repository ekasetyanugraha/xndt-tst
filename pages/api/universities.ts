import { NextApiRequest, NextApiResponse } from 'next';
import data from '../../data/world_universities_and_domain.json';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.statusCode = 200;
    res.json(data);
  }
}
