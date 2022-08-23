import ClicktrackModel from "../models/clicktrack";

const getAll = async () => {
	const allClicktracks = await ClicktrackModel.find({});
	return allClicktracks;
};

const getOne = async (id: string) => {
	const foundClicktrack = await ClicktrackModel.findById(id);
	if (!foundClicktrack) {
		throw new Error('Clicktrack not found');
	} else {
		return foundClicktrack.populate('author');
	}
};

const add = async (title: string, numSections: string, authorId: string) => {
	console.log(title, numSections);
	const newClicktrack = new ClicktrackModel({
		title, numSections, author: authorId
	});
	console.log('newClickTrack', newClicktrack);
	const savedClictrack = await newClicktrack.save();
	return savedClictrack;
};

export default {
	getAll,
	getOne,
	add
};