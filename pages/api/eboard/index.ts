import { getReasonPhrase, StatusCodes } from 'http-status-codes';
import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

import { EBoardOfficer, IEboardOfficer } from '../../../src/models/Officer';
import dbConnect from '../../../src/util/dbConnect';
import { ResponseData } from '../../../typings/index';

dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData<IEboardOfficer | IEboardOfficer[]>>,
): Promise<void> {
  const token = await getToken({ req });
  switch (req.method) {
    case 'GET':
      res.status(StatusCodes.OK).json({
        error: false,
        message: getReasonPhrase(StatusCodes.OK),
        data: await EBoardOfficer.find({ ...req.query }).sort({ rank: 1 }),
      });

      break;

    case 'POST': {
      if (token?.email !== 'aepisa.vt@gmail.com') {
        res.status(StatusCodes.FORBIDDEN).json({
          error: true,
          message: getReasonPhrase(StatusCodes.FORBIDDEN),
          data: null,
        });

        return;
      }

      const officer = new EBoardOfficer(req.body);

      try {
        await officer.save();

        res.status(StatusCodes.CREATED).json({
          error: false,
          message: getReasonPhrase(StatusCodes.CREATED),
          data: officer,
        });
      } catch (error) {
        console.log(error);

        res.status(StatusCodes.BAD_REQUEST).json({
          error: true,
          message: getReasonPhrase(StatusCodes.BAD_REQUEST),
          data: null,
        });
      }
    } break;

    default:
      res.status(StatusCodes.NOT_FOUND).json({
        error: false,
        message: getReasonPhrase(StatusCodes.NOT_FOUND),
        data: null,
      });
      break;
  }
}
