import { NextApiRequest, NextApiResponse } from 'next';
import data from '../../data/world_universities_and_domain.json';
import University from '../../interfaces/university';

const handleGet = (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;
  const {
    limit = 10,
    offset = 0,
    country = '',
    name = '',
  } = query;
  const numLimit = Number(limit);
  const numOffset = Number(offset);

  const pageData: University[] =
    data
      .filter(university => country ? university.alpha_two_code === country : true)
      .filter(university => university.name.includes(name))
      .slice(numOffset, numLimit + numOffset);

  res.status(200).json(pageData);
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET': handleGet(req, res);
    default: handleGet(req, res);
  }
}
