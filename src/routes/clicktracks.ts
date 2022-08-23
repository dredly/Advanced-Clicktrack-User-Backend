/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import clicktrackController from '../controllers/clicktracks';
import { Section } from '../types';
import userExtractor from '../middleware/userExtractor';

const router = express.Router();

router.get('/:id', (async (req, res) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const clicktrack = await clicktrackController.getOne(req.params.id.toString());
	res.send(clicktrack);
}));

router.get('/', userExtractor, (async (req, res) => {
	const clicktracks = await clicktrackController.getAllFromUser(req.userId as string);
	res.send(clicktracks);
}));

router.post('/', userExtractor, (async (req, res) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const { title, sections } = req.body;
	console.log('userId', req.userId);
	const authorId = req.userId;
	const newClickTrack = await clicktrackController.add(title as string, sections as Section[], authorId as string);
	res.send(newClickTrack);
}));

router.put('/:id', (async (req, res) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const { title, sections } = req.body;
	const updatedClicktrack = await clicktrackController.edit(title as string, sections as Section[], req.params.id.toString());
	if (!updatedClicktrack) {
		return res.status(404).send({error: 'Could not find clicktrack to update'});
	}
	return res.send(updatedClicktrack);
}));

router.delete('/:id', (async (req, res) => {	
	await clicktrackController.destroy(req.params.id.toString());
	return res.status(204).send({});
}));

export default router;

