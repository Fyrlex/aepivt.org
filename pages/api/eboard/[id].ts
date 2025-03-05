import { getReasonPhrase, StatusCodes } from 'http-status-codes';
import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect } from '../../../lib/hooks/dbConnect';
import { EboardOfficer } from '../../../models/EboardOfficer';

dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  switch (req.method) {
    case 'GET':
      try {
        const data = await EboardOfficer.findOne({ rank: req.query.id });

        if (!data) {
          res.status(StatusCodes.NOT_FOUND).json({
            error: true,
            message: getReasonPhrase(StatusCodes.NOT_FOUND),
            data: null,
          });

          return;
        }

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

    default:
      res.status(StatusCodes.METHOD_NOT_ALLOWED).json({
        error: false,
        message: getReasonPhrase(StatusCodes.METHOD_NOT_ALLOWED),
        data: null,
      });
      break;
  }
}
