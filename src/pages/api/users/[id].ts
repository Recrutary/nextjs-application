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
 * /api/users/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     description: Get user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: User ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
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
 *       404:
 *         description: User not found
 *   put:
 *     security:
 *       - bearerAuth: []
 *     description: Update user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: User ID
 *         required: true
 *         schema:
 *           type: string
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
 *       200:
 *         description: Updated
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
 *       404:
 *         description: User not found
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     description: Delete user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: User ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: User not found
 */
router.get(async (req, res) => {
  await connectToDatabase();
  const { id } = req.query;
  const user = await userRepository.findById(id as string);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

router.put(async (req, res) => {
  await connectToDatabase();
  const { id } = req.query;
  const user = await userRepository.update(id as string, req.body);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

router.delete(async (req, res) => {
  await connectToDatabase();
  const { id } = req.query;
  const user = await userRepository.findById(id as string);
  if (user) {
    await userRepository.delete(id as string);
    res.status(200).json({ message: 'User deleted successfully' });
  } else {
    res.status(404).json({ message: 'User not found' });
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
