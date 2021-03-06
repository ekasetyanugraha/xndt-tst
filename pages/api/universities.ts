import { NextApiRequest, NextApiResponse } from 'next';
import data from 'data/world_universities_and_domain.json';
import University from 'interfaces/university';

const handleGet = (req: NextApiRequest, res: NextApiResponse): void => {
  const { query } = req;
  const { limit = 10, offset = 0, name = '', alpha_two_code = '' } = query;
  const numLimit = Number(limit);
  const numOffset = Number(offset);

  const universitiesFiltered: University[] = data
    .filter((university) => (alpha_two_code ? university.alpha_two_code === alpha_two_code : true))
    .filter((university) => university.name.toLowerCase().includes(name.toString().toLowerCase()));

  const responseData: University[] = universitiesFiltered.slice(numOffset, numLimit + numOffset);

  res.status(200).json({
    data: responseData,
    meta: {
      status: 200,
      limit: numLimit,
      offset: numOffset,
      total: universitiesFiltered.length,
    },
  });
};

export default (req: NextApiRequest, res: NextApiResponse): void => {
  switch (req.method) {
    case 'GET':
      handleGet(req, res);
    default:
      handleGet(req, res);
  }
};
