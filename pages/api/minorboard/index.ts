import { getReasonPhrase, StatusCodes } from 'http-status-codes';
import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

import { MinorBoardOfficer, MinorBoardOfficerOptions } from '../../../models/MinorBoardOfficer';
import { ResponseData } from '../../../typings/index';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData<MinorBoardOfficerOptions | MinorBoardOfficerOptions[]>>,
): Promise<void> {
  const token = await getToken({ req });
  switch (req.method) {
    case 'GET':
      try {
        const data = await MinorBoardOfficer.find().sort({ rank: 1 });

        res.status(StatusCodes.OK).json({
          error: false,
          message: getReasonPhrase(StatusCodes.OK),
          data,
        });
      } catch (error) {
        console.error(error);

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          error: true,
          message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
          data: null,
        });
      }

      break;

    case 'PATCH': {
      if (token?.email !== 'aepisa.vt@gmail.com') {
        res.status(StatusCodes.FORBIDDEN).json({
          error: true,
          message: getReasonPhrase(StatusCodes.FORBIDDEN),
          data: null,
        });

        return;
      }

      const data = req.body as MinorBoardOfficerOptions[];

      try {
        await Promise.all(data.map(async (officer) => {
          await MinorBoardOfficer.findOneAndUpdate({ rank: officer.rank }, officer, { upsert: true });
        }));

        res.status(StatusCodes.OK).json({
          error: false,
          message: getReasonPhrase(StatusCodes.OK),
          data,
        });

      } catch (error) {
        console.error(error);

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          error: true,
          message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
          data: null,
        });
      }
    } break;

    default:
      res.status(StatusCodes.METHOD_NOT_ALLOWED).json({
        error: false,
        message: getReasonPhrase(StatusCodes.METHOD_NOT_ALLOWED),
        data: null,
      });
      break;
  }
}
