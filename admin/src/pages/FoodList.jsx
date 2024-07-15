import { NavLink, useLoaderData, useNavigate } from 'react-router-dom';
import './foodList.css';
import { slugify } from '../assets/utils';
const FoodList = () => {
	const food = useLoaderData();
	const tableColumns = ['Image', 'Name', 'Category', 'Price'];
	const navigate = useNavigate();

	const navigateToItemHandler = (foodName) => {
		const slug = slugify(foodName);
		navigate(`/food/${slug}/details`);
	};
	return (
		<div className='food_list'>
			<h1 className='food_list__caption'>All food</h1>
			<table>
				<thead>
					<tr>
						<th></th>
						{tableColumns.map((column) => {
							return <th key={column}>{column}</th>;
						})}
					</tr>
				</thead>
				<tbody>
					{food.map((meal, index) => {
						return (
							<tr
								key={meal._id}
								onClick={() => navigateToItemHandler(meal.name)}
							>
								<td>{index + 1}.</td>
								<td>
									<img
										className='foodlist__meal_image'
										src={`http://localhost:4000/images/${meal.image}`}
										alt={meal.name}
									/>
								</td>
								<td>{meal.name}</td>
								<td>{meal.category}</td>
								<td>{meal.price}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default FoodList;
