/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import clicktrackController from '../controllers/clicktracks';

const router = express.Router();

router.get('/', (async (_req, res) => {
	const allClicktracks = await clicktrackController.getAll();
	res.send(allClicktracks);
}));

export default router;

