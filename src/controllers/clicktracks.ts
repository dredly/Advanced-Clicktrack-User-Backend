import ClicktrackModel from "../models/clicktrack";

const getAll = async () => {
	const allClicktracks = await ClicktrackModel.find({});
	return allClicktracks;
};

export default {
	getAll
};