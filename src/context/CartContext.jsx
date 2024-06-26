import { createContext, useState } from 'react';

export const CartContext = createContext({
	items: [],
	addToCart: () => {},
});

export default function CartContextProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);
	const addToCartHandler = (cartItem, amount) => {
		let updatedCartItems = [...cartItems];
		const existingSelectedMenuItemIndex = updatedCartItems.findIndex(
			(item) => item._id === cartItem._id
		);
		const existingSelectedMenuItem = updatedCartItems[existingSelectedMenuItemIndex];
		if (existingSelectedMenuItem) {
			const updatedItem = { ...existingSelectedMenuItem };
			updatedItem.quantity += amount;
			if (updatedItem.quantity > 0) {
				updatedCartItems[existingSelectedMenuItemIndex] = updatedItem;
			} else {
				updatedCartItems.splice(existingSelectedMenuItemIndex, 1);
			}
		} else {
			updatedCartItems.push({ ...cartItem, quantity: 1 });
		}

		setCartItems(updatedCartItems);
	};
	const CartContextValues = {
		items: cartItems,
		addToCart: addToCartHandler,
	};
	return (
		<CartContext.Provider value={CartContextValues}>{children}</CartContext.Provider>
	);
}
