import * as dotenv from "dotenv";

if (process.env.NODE_ENV !== 'production') {
	dotenv.config();
}

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import clicktrackRouter from './routes/clicktracks';
import userRouter from './routes/users';

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
app.use(express.json());

app.use('/api/clicktracks', clicktrackRouter);
app.use('/api/users', userRouter);

const PORT = 3002;

app.get('/api/ping', (_req, res) => {
	res.send('pong');
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});