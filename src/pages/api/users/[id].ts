import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import connectToDatabase from '../../../lib/mongodb';
import userRepository from '../../../repositories/user.repository';
import bodyParser from '../../../middleware/body.parser';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.use(bodyParser);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     description: Get user by ID
 *     parameters:
 *       - name: id
 *         description: User ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *   put:
 *     description: Update user by ID
 *     parameters:
 *       - name: id
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
 *   delete:
 *     description: Delete user by ID
 *     parameters:
 *       - name: id
 *         description: User ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Deleted
 */
router.get(async (req, res) => {
  await connectToDatabase();
  const { id } = req.query;
  const user = await userRepository.findById(id as string);
  res.status(200).json(user);
});

router.put(async (req, res) => {
  await connectToDatabase();
  const { id } = req.query;
  const user = await userRepository.update(id as string, req.body);
  res.status(200).json(user);
});

router.delete(async (req, res) => {
  await connectToDatabase();
  const { id } = req.query;
  await userRepository.delete(id as string);
  res.status(204).end();
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
