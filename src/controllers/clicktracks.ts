import ClicktrackModel from "../models/clicktrack";

const getAll = async () => {
	const allClicktracks = await ClicktrackModel.find({}).populate('author');
	return allClicktracks;
};

export default {
	getAll
};