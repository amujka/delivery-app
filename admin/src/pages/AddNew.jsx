import { useState } from 'react';
import './addNew.css';
import { assets } from '../assets/assets.js';
const AddNew = () => {
	const foodCategories = [
		'Salad',
		'Rolls',
		'Deserts',
		'Sandwich',
		'Cake',
		'Pure Veg',
		'Pasta',
		'Noodles',
	];

	const [isDropdownActive, setIsDropdownActive] = useState(false);

	const selectCategoryHandler = (category) => {
		setNewMeal((prev) => ({ ...prev, category }));
		setIsDropdownActive(false);
	};

	const [newMeal, setNewMeal] = useState({
		name: '',
		description: '',
		price: 0,
		category: foodCategories[0],
		image: null,
	});

	const setNewMealHandler = (input) => {
		if (input.name === 'image') {
			setNewMeal((prev) => ({ ...prev, [input.name]: input.files[0] }));
		} else {
			setNewMeal((prev) => ({ ...prev, [input.name]: input.value }));
		}
	};
	const submitHandler = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('name', newMeal.name);
		formData.append('description', newMeal.description);
		formData.append('price', newMeal.price);
		formData.append('category', newMeal.category);
		formData.append('image', newMeal.image);
		try {
			const response = await fetch('http://localhost:4000/api/food/add', {
				method: 'POST',
				body: formData,
			});
			const data = await response.json();
			if (!data.success) {
				throw data.errors;
			}
			console.log('data', data);
		} catch (error) {
			console.log('error', error);
		}
	};
	return (
		<div className='form'>
			<h1>Add new meal</h1>
			<div className='form__input_wrapper'>
				<label>Upload image</label>
				<label htmlFor='image' className='form__upload_img'>
					<img
						className='w-52 aspect-square border'
						src={
							newMeal.image
								? URL.createObjectURL(newMeal.image)
								: assets.upload_area
						}
						alt='Upload image'
					/>
				</label>
				<input
					id='image'
					type='file'
					name='image'
					hidden
					required
					onChange={(e) => setNewMealHandler(e.target)}
				/>
			</div>
			<div className='form__input_wrapper'>
				<label>Meal name</label>
				<input
					type='text'
					name='name'
					onChange={(e) => setNewMealHandler(e.target)}
				/>
			</div>
			<div className='form__input_wrapper'>
				<label>Meal description</label>
				<textarea
					name='description'
					onChange={(e) => setNewMealHandler(e.target)}
				/>
			</div>
			<div className='form__category_price_wrapper'>
				<div className='form__input_wrapper form__input_wrapper--dropdown'>
					<label>Category</label>
					<div
						className='form__selected_category'
						onClick={() => setIsDropdownActive((prev) => !prev)}
					>
						{newMeal.category}
					</div>
					{isDropdownActive && (
						<ul className='form__category_options'>
							{foodCategories.map((category) => (
								<li
									key={category}
									onClick={() => selectCategoryHandler(category)}
								>
									{category}
								</li>
							))}
						</ul>
					)}
				</div>
				<div className='form__input_wrapper'>
					<label>Price</label>
					<input
						type='number'
						name='price'
						onChange={(e) => setNewMealHandler(e.target)}
					/>
				</div>
			</div>
			<button onClick={submitHandler}>Add</button>
		</div>
	);
};

export default AddNew;
