import fs from 'fs';
import { getReasonPhrase, StatusCodes } from 'http-status-codes';
import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

import { EboardOfficerOptions } from '../../../models/EboardOfficer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const token = await getToken({ req });
  switch (req.method) {
    case 'GET':
      try {
        const data = fs.readdirSync('./public/data/eboard').map<EboardOfficerOptions>((file) => {
          return JSON.parse(fs.readFileSync(`./public/data/eboard/${file}`, 'utf-8'));
        }).sort((a, b) => a.rank - b.rank);

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

      const data = req.body as EboardOfficerOptions[];

      try {
        data.forEach((officer) => {
          fs.writeFileSync(`./public/data/eboard/${officer.rank}.json`, JSON.stringify(officer));
        });

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
