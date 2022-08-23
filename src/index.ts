import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import clicktrackRouter from './routes/clicktracks';
import userRouter from './routes/users';
import config from './config';

const app = express();

mongoose.connect(config.MONGODB_URI)
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

app.get('/api/ping', (_req, res) => {
	res.send('pong');
});

app.listen(config.PORT, () => {
	console.log(`Server running on port ${config.PORT}`);
});