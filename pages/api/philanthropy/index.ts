import fs from 'fs';
import { getReasonPhrase, StatusCodes } from 'http-status-codes';
import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

import { PhilanthropyOptions } from '../../../models/Philanthropy.js';
import { ResponseData } from '../../../typings/index';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData<PhilanthropyOptions | PhilanthropyOptions[]>>,
): Promise<void> {
  const token = await getToken({ req });

  switch (req.method) {
    case 'GET':
      try {
        const data = JSON.parse(fs.readFileSync(`./data/philanthropy/index.json`, 'utf-8'));

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


      const data = req.body as PhilanthropyOptions;

      try {
        fs.writeFileSync(`./data/philanthropy/index.json`, JSON.stringify(data));

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
