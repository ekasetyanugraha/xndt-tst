import { NextApiRequest, NextApiResponse } from 'next';
import data from 'data/world_universities_and_domain.json';
import University from 'interfaces/university';
import sleep from './sleep';

const handleGet = (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;
  const {
    limit = 10,
    offset = 0,
    name = '',
  } = query;
  const numLimit = Number(limit);
  const numOffset = Number(offset);

  const pageData: University[] =
    data
      .filter(university => university.name.includes(name as string))
      .slice(numOffset, numLimit + numOffset);

  res.status(200).json(pageData);
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await sleep();

  switch (req.method) {
    case 'GET': handleGet(req, res);
    default: handleGet(req, res);
  }
}
