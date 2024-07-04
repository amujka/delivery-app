import { createStore } from 'redux';
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
	korisnik: 'Alen Mujkanovic',
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			console.log(action);
			return state;
		case 'REMOVE_ITEM':
			return state;
		default:
			return state;
	}
};

const cartStore = createStore(cartReducer);

export default cartStore;
