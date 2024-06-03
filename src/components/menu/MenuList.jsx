import { food_list } from '../../assets/assets';
import MenuItem from './MenuItem';
const MenuList = ({ activeItem, orderedItems, ...orderProps }) => {
	const filteredFoodList = food_list.filter(
		(food) => activeItem === 'All' || activeItem === food.category
	);
	const categoryArr = [...new Set(filteredFoodList.map((item) => item.category))];

	return (
		<div className='menu__container'>
			{categoryArr.map((category) => {
				return (
					<div key={category}>
						<h1 className='menu__category_name'>{category}</h1>
						<ul className='menu__list'>
							{filteredFoodList.map((menuItem) => {
								let orderedItem = orderedItems.find(
									(item) => item.itemId === menuItem._id
								);
								if (menuItem.category === category) {
									return (
										<MenuItem
											key={menuItem._id}
											menuItem={menuItem}
											amount={orderedItem?.amount}
											{...orderProps}
										/>
									);
								}
							})}
						</ul>
					</div>
				);
			})}
		</div>
	);
};

export default MenuList;
