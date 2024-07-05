import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	items: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			const itemIndex = state.items.findIndex(
				(item) => item._id === action.payload._id
			);

			if (itemIndex === -1) {
				state.items.push({ ...action.payload, quantity: 1 });
			} else {
				state.items[itemIndex].quantity += 1;
			}
		},
		removeItem(state, action) {
			const itemIndex = state.items.findIndex(
				(item) => item._id === action.payload
			);
			if (state.items[itemIndex].quantity > 1) {
				state.items[itemIndex].quantity -= 1;
			} else {
				state.items.splice(itemIndex, 1);
			}
		},
	},
});
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
