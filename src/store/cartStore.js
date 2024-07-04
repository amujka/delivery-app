import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	items: [
		{
			_id: '3',
			name: 'Clover Salad',
			image: '/src/assets/images/food_3.png',
			price: 16,
			description:
				'Food provides essential nutrients for overall health and well-being',
			category: 'Salad',
			quantity: 3,
		},
	],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			state.items.push(action.payload);
		},
		removeItem(state) {
			state.items[0].quantity--;
		},
	},
});
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
