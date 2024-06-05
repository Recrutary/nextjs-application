import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import connectToDatabase from '../../../lib/mongodb';
import userRepository from '../../../modules/user/repositories/user.repository';
import bodyParser from '../../../middleware/body.parser';
import verifyIdToken from '../../../middleware/verify.id.token';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.use(bodyParser);
router.use(verifyIdToken);

/**
 * @swagger
 * /api/users:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     description: Get all users
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *   post:
 *     security:
 *       - bearerAuth: []
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
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 */
router.get(async (req, res) => {
  await connectToDatabase();
  const users = await userRepository.findAll();
  res.status(200).json(users);
});

router.post(async (req, res) => {
  await connectToDatabase();
  const { user } = req as any;
  const existingUser = await userRepository.findByUid(user.uid);

  if (existingUser) {
    // Atualiza o usuário existente
    const updatedUser = await userRepository.update(existingUser.id, req.body);
    res.status(200).json(updatedUser);
  } else {
    // Cria um novo usuário
    const newUser = await userRepository.create({ ...req.body, uid: user.uid });
    res.status(201).json(newUser);
  }
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
