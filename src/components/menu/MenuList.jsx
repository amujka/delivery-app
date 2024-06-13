import { food_list } from '../../assets/assets';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import MenuItem from './MenuItem';
const MenuList = ({ selectedCategory }) => {
	const filteredFoodList = food_list.filter(
		(food) => selectedCategory === 'All' || selectedCategory === food.category
	);
	const categories = [...new Set(filteredFoodList.map((item) => item.category))];
	const { items } = useContext(CartContext);
	const findItemAmount = (id) => {
		return items.find((item) => item._id === id)?.quantity || 0;
	};
	return (
		<div className='menu__container'>
			{categories.map((category) => {
				return (
					<div key={category}>
						<h1 className='menu__category_name'>{category}</h1>
						<ul className='menu__list'>
							{filteredFoodList.map((foodItem) => {
								return foodItem.category === category ? (
									<MenuItem
										item={foodItem}
										quantity={findItemAmount(foodItem._id)}
										key={foodItem._id}
									/>
								) : null;
							})}
						</ul>
					</div>
				);
			})}
		</div>
	);
};

export default MenuList;
