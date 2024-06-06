import { useState } from 'react';
import './menu.css';
import { menu_list } from '../../assets/assets';
import MenuCategory from './MenuCategory';
import MenuList from './MenuList';

const Menu = () => {
	const [selectedCategory, setSelectedCategory] = useState('All');
	const onSelectItemHandler = (item) => {
		setSelectedCategory(item);
	};
	console.log('menu');
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
			<MenuList selectedCategory={selectedCategory} />
		</div>
	);
};

export default Menu;
