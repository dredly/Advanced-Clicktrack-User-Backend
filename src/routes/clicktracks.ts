import express from 'express';
import ClicktrackModel from '../models/clicktrack';
import clicktrackController from '../controllers/clicktracks';

const router = express.Router();

router.get('/', ((_req, res) => {
	res.send(clicktrackController.getAll());
}));

export default router;

