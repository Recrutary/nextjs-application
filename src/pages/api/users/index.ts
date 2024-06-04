import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import connectToDatabase from '../../../lib/mongodb';
import userRepository from '../../../repositories/user.repository';
import bodyParser from '../../../middleware/body.parser';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.use(bodyParser);

/**
 * @swagger
 * /api/users:
 *   get:
 *     description: Get all users
 *     responses:
 *       200:
 *         description: Success
 *   post:
 *     description: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.get(async (req, res) => {
  await connectToDatabase();
  const users = await userRepository.findAll();
  res.status(200).json(users);
});

router.post(async (req, res) => {
  await connectToDatabase();
  const user = await userRepository.create(req.body);
  res.status(201).json(user);
});

export default router.handler({
  onError: (err, req, res) => {
    console.error(err);
    res.status(500).end(err);
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found');
  },
});
