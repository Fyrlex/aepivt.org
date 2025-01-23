import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import { isObjectIdOrHexString } from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import { IRushEvent, RushEvent } from '../../../src/models/RushEvent.js';
import dbConnect from '../../../src/util/dbConnect.js';
import { ResponseData } from '../../../typings/index.js';

dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData<IRushEvent>>,
): Promise<void> {
  switch (req.method) {
    case 'GET':
      if (!isObjectIdOrHexString(req.query.id)) {
        res.status(StatusCodes.BAD_REQUEST).json({
          error: true,
          message: getReasonPhrase(StatusCodes.BAD_REQUEST),
          data: null,
        });
      }

      res.status(StatusCodes.OK).json({
        error: false,
        message: getReasonPhrase(StatusCodes.OK),
        data: await RushEvent.findById(req.query.id).sort({ rank: 1 }),
      });

      break;
  }
}
