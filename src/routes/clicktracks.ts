/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import clicktrackController from '../controllers/clicktracks';
import { Section } from '../types';

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
	const { title, sections } = req.body;
	const authorId = '6303c18460a4dba65eabb33a'; //hardcoded for now
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

