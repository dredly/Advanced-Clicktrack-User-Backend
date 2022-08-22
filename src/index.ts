import * as dotenv from "dotenv";

if (process.env.NODE_ENV !== 'production') {
	console.log('Not production');
	dotenv.config();
}

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

mongoose.connect(process.env.MONGODB_URI_DEV as string)
	.then(() => {
		console.log('connected to MongoDB');
	})
	.catch((error) => {
		console.error('error connecting to MongoDB:', error.message);
	});

const corsOptions = {
	origin: 'https://clicktrack-redux.vercel.app',
	optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

const PORT = 3002;

app.get('/api/ping', (_req, res) => {
	res.send('pong');
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});