// src/middleware/verify.id.token.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getAuth } from 'firebase-admin/auth';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { NextHandler } from 'next-connect';

if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

const auth = getAuth();

const verifyIdToken = async (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
  const token = req.headers.authorization?.split('Bearer ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decodedToken = await auth.verifyIdToken(token);
    (req as any).user = decodedToken;
    return next();
  } catch (error) {
    console.log(error)
    return res.status(401).json({ error: 'Unauthorized' });
  }
};

export default verifyIdToken;
