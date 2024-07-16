import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
	name: { type: String, required: [true, 'Name is required'] },
	description: { type: String, required: [true, 'Description is required'] },
	price: {
		type: Number,
		required: [true, 'Price is required'],
		min: [1, 'Price is required'],
	},
	category: { type: String, required: [true, 'Category is required'] },
	image: { type: String, required: [true, 'Image is required'] },
});

const foodModel = mongoose.models.food || mongoose.model('food', foodSchema);

export default foodModel;
