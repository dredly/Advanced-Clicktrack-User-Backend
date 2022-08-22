/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import userController from '../controllers/users';

const router = express.Router();

router.get('/', (async (_req, res) => {
	const allUsers = await userController.getAll();
	res.send(allUsers);
}));

export default router;