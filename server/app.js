import express from 'express';
import cors from 'cors';
import { connectDb } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
const app = express();
const PORT = 4000;

//middleware
app.use(express.json());
app.use(cors());

//DB connection
connectDb();

//api ednpoint
app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads'));

app.listen(PORT, () => {
	console.log(`server is running on ${PORT}`);
});
