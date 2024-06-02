import { useState } from 'react';
import './menu.css';
import { menu_list } from '../../assets/assets';
import MenuCategory from './MenuCategory';
import MenuList from './MenuList';

const Menu = () => {
	const [activeItem, setActiveItem] = useState('All');
	const onSelectItemHandler = (item) => {
		setActiveItem(item);
	};

	const [orderedItems, setOrderedItems] = useState([]);

	const addItemHandler = (itemId) => {
		const index = orderedItems.findIndex((item) => item.itemId === itemId);
		console.log(index);
		if (index === -1) {
			setOrderedItems([...orderedItems, { itemId, amount: 1 }]);
		}
	};
	console.log(orderedItems);
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
				{menu_list.map((item) => {
					return (
						<MenuCategory
							key={item.menu_name}
							item={item}
							activeItemName={activeItem}
							onSelect={onSelectItemHandler}
						/>
					);
				})}
			</ul>
			<MenuList activeItem={activeItem} onOrder={addItemHandler} />
		</div>
	);
};

export default Menu;
