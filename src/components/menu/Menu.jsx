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

	const addToCartHandler = (itemId) => {
		const existingItemIndex = orderedItems.findIndex(
			(item) => item.itemId === itemId
		);
		if (existingItemIndex === -1) {
			setOrderedItems([...orderedItems, { itemId, amount: 1 }]);
		} else {
			const copyOrderedItems = [...orderedItems];
			copyOrderedItems[existingItemIndex].amount += 1;
			setOrderedItems(copyOrderedItems);
		}
	};
	const removeFromCartHandler = (itemId) => {
		const existingItemIndex = orderedItems.findIndex(
			(item) => item.itemId === itemId
		);
		if (existingItemIndex !== -1) {
			let copyOrderedItems = [...orderedItems];
			if (copyOrderedItems[existingItemIndex].amount) {
				copyOrderedItems[existingItemIndex].amount -= 1;
			}
			if (!copyOrderedItems[existingItemIndex].amount) {
				copyOrderedItems = copyOrderedItems.filter(
					(item) => item.itemId !== itemId
				);
			}
			setOrderedItems(copyOrderedItems);
		}
	};
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
			<MenuList
				activeItem={activeItem}
				onOrder={addToCartHandler}
				onRemove={removeFromCartHandler}
				orderedItems={orderedItems}
			/>
		</div>
	);
};

export default Menu;
