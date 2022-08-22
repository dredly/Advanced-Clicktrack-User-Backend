import * as dotenv from "dotenv";

if (process.env.NODE_ENV !== 'production') {
	console.log('Not production');
	dotenv.config();
}

import mongoose from 'mongoose';
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
	const user1 = new UserModel({username: 'miguel123'});
	const user2 = new UserModel({username: 'jacksorjacksor'});
	await user1.save();
	await user2.save();
	await mongoose.connection.close();
};

seedDB().then(() => {
	console.log('Done');
}).catch(() => {
	console.error('Error');
});