import foodModel from '../model/foodModel.js';
import fs from 'fs';

export const getFood = async (req, res) => {
	try {
		const food = await foodModel.find({});
		res.json({ food });
	} catch (error) {
		console.log({ success: false, message: error });
	}
};

export const addFood = async (req, res) => {
	let image_filename = `${req.file.filename}`;
	const food = new foodModel({
		name: req.body.name,
		description: req.body.description,
		price: req.body.price,
		category: req.body.category,
		image: image_filename,
	});
	try {
		await food.save();
		res.json({ success: true, message: 'food added' });
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: error });
	}
};
