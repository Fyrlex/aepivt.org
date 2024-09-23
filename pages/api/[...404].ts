import { getReasonPhrase, StatusCodes } from 'http-status-codes';
import { NextApiHandler } from 'next';

const handler: NextApiHandler = (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({
    error: false,
    message: getReasonPhrase(StatusCodes.NOT_FOUND),
    data: null,
  });
};

export default handler;
