import { NextApiRequest, NextApiResponse } from 'next';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from '../../lib/swagger';

const swaggerUiHandler = swaggerUi.setup(swaggerSpec);

export default function handler(req: any, res: any, next: any) {
  swaggerUiHandler(req, res, next);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
