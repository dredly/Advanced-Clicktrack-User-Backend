import UserModel from "../models/user";

const getAll = async () => {
	const allUsers = await UserModel.find({});
	return allUsers;
};

export default {
	getAll
};