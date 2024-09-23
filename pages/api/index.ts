import { getReasonPhrase, StatusCodes } from 'http-status-codes';
import { NextApiHandler } from 'next';

const handler: NextApiHandler = (req, res) => {
  res.status(StatusCodes.OK).json({
    error: false,
    message: getReasonPhrase(StatusCodes.OK),
    data: null,
  });
};

export default handler;
