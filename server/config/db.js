import mongoose from 'mongoose';

export const connectDb = async () => {
	await mongoose
		.connect('mongodb+srv://amujka:test1234@cluster0.9ucl8sg.mongodb.net/food-del')
		.then(() => {
			console.log('db connected');
		});
};
