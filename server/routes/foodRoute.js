import express from 'express';
import { addFood, getFood } from '../controllers/foodController.js';
import multer from 'multer';

const router = express.Router();

//image storage
const storage = multer.diskStorage({
	destination: 'uploads',
	filename: (req, file, cb) => {
		return cb(null, `${Date.now()}${file.originalname}`);
	},
});
const upload = multer({
	storage,
});
router.post('/add', upload.single('image'), addFood);

router.get('/', getFood);
export default router;
