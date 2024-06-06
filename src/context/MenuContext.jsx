import { createContext, useState } from 'react';

export const MenuContext = createContext({
	items: [],
	selectMenuItem: () => {},
});

export default function MenuContextProvider({ children }) {
	const [selectedMenuItems, setSelectedMenuItems] = useState([]);
	const selectMenuItemHandler = (itemId, amount) => {
		let updatedSelectedMenuItems = [...selectedMenuItems];
		const existingSelectedMenuItemIndex = updatedSelectedMenuItems.findIndex(
			(item) => item._id === itemId
		);
		const existingSelectedMenuItem =
			updatedSelectedMenuItems[existingSelectedMenuItemIndex];
		if (existingSelectedMenuItem) {
			const updatedItem = { ...existingSelectedMenuItem };
			updatedItem.quantity += amount;
			if (updatedItem.quantity > 0) {
				updatedSelectedMenuItems[existingSelectedMenuItemIndex] = updatedItem;
			} else {
				updatedSelectedMenuItems.splice(existingSelectedMenuItemIndex, 1);
			}
		} else {
			updatedSelectedMenuItems.push({ _id: itemId, quantity: 1 });
		}

		setSelectedMenuItems(updatedSelectedMenuItems);
	};
	const menuContextValues = {
		items: selectedMenuItems,
		selectMenuItem: selectMenuItemHandler,
	};
	return (
		<MenuContext.Provider value={menuContextValues}>{children}</MenuContext.Provider>
	);
}
