import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import { isObjectIdOrHexString } from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import { IMinorBoardOfficer, MinorBoardOfficer } from '../../../src/models/MinorBoardOfficer.js';
import dbConnect from '../../../src/util/dbConnect.js';
import { ResponseData } from '../../../typings/index.js';

dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData<IMinorBoardOfficer>>,
): Promise<void> {
  const token = await getToken({ req });

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
        data: await MinorBoardOfficer.findById(req.query.id).sort({ rank: 1 }),
      });

      break;

    case 'DELETE':
      if (token?.email !== 'aepisa.vt@gmail.com') {
        res.status(StatusCodes.FORBIDDEN).json({
          error: true,
          message: getReasonPhrase(StatusCodes.FORBIDDEN),
          data: null,
        });

        return;
      }

      try {
        await MinorBoardOfficer.findByIdAndDelete(req.body.id);

        res.status(StatusCodes.CREATED).json({
          error: false,
          message: getReasonPhrase(StatusCodes.CREATED),
          data: null,
        });
      } catch (error) {
        console.log(error);

        res.status(StatusCodes.BAD_REQUEST).json({
          error: true,
          message: getReasonPhrase(StatusCodes.BAD_REQUEST),
          data: null,
        });
      }
      break;
  }
}
