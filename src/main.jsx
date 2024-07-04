import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ThemeContextProvider from './context/ThemeContext.jsx';

import { Provider } from 'react-redux';
import cartStore from './store/cartStore.js';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeContextProvider>
			<BrowserRouter>
				<Provider store={cartStore}>
					<App />
				</Provider>
			</BrowserRouter>
		</ThemeContextProvider>
	</React.StrictMode>
);
