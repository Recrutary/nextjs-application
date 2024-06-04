import { NextApiRequest, NextApiResponse } from 'next';
import { NextHandler } from 'next-connect';

export default function bodyParser(req: NextApiRequest, res: NextApiResponse, next: NextHandler) {
  if (req.method === 'POST' || req.method === 'PUT') {
    if (req.body === undefined) {
      let data = '';

      req.on('data', (chunk) => {
        data += chunk;
      });

      req.on('end', () => {
        try {
          req.body = JSON.parse(data);
        } catch (error) {
          return res.status(400).json({ error: 'Invalid JSON payload' });
        }
        next();
      });
    } else {
      next();
    }
  } else {
    next();
  }
}