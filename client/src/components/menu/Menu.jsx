import { useEffect, useState } from 'react';
import './menu.css';
import { menu_list } from '../../assets/assets';
import MenuCategory from './MenuCategory';
import MenuList from './MenuList';

const Menu = () => {
	const [selectedCategory, setSelectedCategory] = useState('all');
	const onSelectItemHandler = (item) => {
		setSelectedCategory(item);
	};

	const [foodList, setFoodList] = useState([]);
	const filteredFoodList = foodList.filter(
		(food) => selectedCategory === 'all' || selectedCategory === food.category
	);
	const categories = [...new Set(filteredFoodList.map((item) => item.category))];
	useEffect(() => {
		async function getFood() {
			const response = await fetch('http://localhost:4000/api/food');
			const { food } = await response.json();
			setFoodList(food);
		}
		getFood();
	}, []);
	return (
		<div className='menu'>
			<h1 className='menu__title'>Explore our menu</h1>
			<p className='menu__subtitle'>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam distinctio
				minima repellendus dolores laborum adipisci iusto vel pariatur, ullam aut
				laudantium, id et necessitatibus dolore, nulla facere doloribus tenetur
				aliquam?
			</p>
			<ul className='menu__category_list'>
				{menu_list.map((category) => {
					return (
						<MenuCategory
							key={category.menu_name}
							category={category}
							selectedCategory={selectedCategory}
							onSelect={onSelectItemHandler}
						/>
					);
				})}
			</ul>
			<MenuList
				selectedCategory={selectedCategory}
				categories={categories}
				foodList={filteredFoodList}
			/>
		</div>
	);
};

export default Menu;
