import fs from 'fs';
import { getReasonPhrase, StatusCodes } from 'http-status-codes';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  switch (req.method) {
    case 'GET':
      try {
        const data = JSON.parse(fs.readFileSync(`./public/data/eboard/${req.query.id}.json`, 'utf-8'));

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
