import * as dotenv from "dotenv";

if (process.env.NODE_ENV !== 'production') {
	console.log('Not production');
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

	const user1 = new UserModel({username: 'miguel123'});
	const user2 = new UserModel({username: 'jacksorjacksor'});

	const ct1 = new ClicktrackModel({
		title: 'Flight of the Bumblebee', 
		numSections: 2
	});
	const ct2 = new ClicktrackModel({
		title: 'In the Hall of the Mountain King', 
		numSections: 4
	});
	const ct3 = new ClicktrackModel({
		title: 'Band Practice 24/05/2022', 
		numSections: 5
	});

	await user1.save();
	await user2.save();

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