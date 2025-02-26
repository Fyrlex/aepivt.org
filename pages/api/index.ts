import { getReasonPhrase, StatusCodes } from 'http-status-codes';
import { NextApiHandler } from 'next';

import { ResponseData } from '../../typings/index.js';
import dbConnect from '../../util/dbConnect';

dbConnect();

const handler: NextApiHandler<ResponseData> = (req, res) => {
  res.status(StatusCodes.OK).json({
    error: false,
    message: getReasonPhrase(StatusCodes.OK),
    data: null,
  });
};

export default handler;
