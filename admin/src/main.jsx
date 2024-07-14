import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root.jsx';
import AddNew from './pages/AddNew.jsx';
import FoodList from './pages/FoodList.jsx';
import FoodDetails from './pages/FoodDetails.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				index: true,
				element: <FoodList />,
				loader: async () => {
					try {
						const response = await fetch('http://localhost:4000/api/food');
						const { food } = await response.json();
						console.log(food);
						return food;
					} catch (error) {
						return error;
					}
				},
			},
			{
				path: '/add-new',
				element: <AddNew />,
			},
			{
				path: '/food/:food-name/details',
				element: <FoodDetails />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
