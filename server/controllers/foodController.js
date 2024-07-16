import foodModel from '../model/foodModel.js';

export const getFood = async (req, res) => {
	try {
		const food = await foodModel.find({});
		res.json({ food });
	} catch (error) {
		console.log({ success: false, message: error });
	}
};

export const addFood = async (req, res) => {
	try {
		const food = new foodModel({
			name: req.body.name,
			description: req.body.description,
			price: req.body.price,
			category: req.body.category,
			image: req?.file?.filename,
		});
		await food.save();
		res.json({ success: true, message: `${food.name} added` });
	} catch (error) {
		res.json({ success: false, errors: error.errors });
	}
};
