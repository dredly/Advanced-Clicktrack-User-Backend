import * as dotenv from "dotenv";

if (process.env.NODE_ENV !== 'production') {
	dotenv.config();
}

import mongoose from 'mongoose';
import ClicktrackModel from "../src/models/clicktrack";
import UserModel from '../src/models/user';

mongoose.connect(process.env.MONGODB_URI_DEV as string)
	.then(() => {
		console.log('connected to MongoDB');
	})
	.catch((error) => {
		console.error('error connecting to MongoDB:', error.message);
	});

const seedDB = async () => {
	await UserModel.deleteMany({});
	await ClicktrackModel.deleteMany({});

	const user1 = new UserModel({
		username: 'miguel123',
		name: 'Miguel',
		passwordHash: 'secret'
	});

	const miguel = await user1.save();

	const ct1 = new ClicktrackModel({
		title: 'Flight of the Bumblebee', 
		numSections: 2,
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		author: miguel.id
	});
	const ct2 = new ClicktrackModel({
		title: 'In the Hall of the Mountain King', 
		numSections: 4,
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		author: miguel.id
	});
	const ct3 = new ClicktrackModel({
		title: 'Band Practice 24/05/2022', 
		numSections: 5,
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		author: miguel.id
	});

	await ct1.save();
	await ct2.save();
	await ct3.save();

	await mongoose.connection.close();
};

seedDB().then(() => {
	console.log('Done');
}).catch(() => {
	console.error('Error');
});