import express from 'express';
import cors from 'cors';

const app = express();

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