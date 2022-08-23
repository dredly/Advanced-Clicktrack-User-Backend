/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import clicktrackController from '../controllers/clicktracks';

const router = express.Router();

router.get('/:id', (async (req, res) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const clicktrack = await clicktrackController.getOne(req.params.id.toString());
	res.send(clicktrack);
}));

router.get('/', (async (_req, res) => {
	const allClicktracks = await clicktrackController.getAll();
	res.send(allClicktracks);
}));

router.post('/', (async (req, res) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const { title, numSections } = req.body;
	const authorId = '6303c18460a4dba65eabb33a'; //hardcoded for now
	const newClickTrack = await clicktrackController.add(title as string, numSections as string, authorId as string);
	res.send(newClickTrack);
}));

export default router;

