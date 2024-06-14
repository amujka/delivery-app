import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import InfoForm from './pages/infoForm/InfoForm';
import Footer from './components/footer/Footer';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import { ThemeContext } from './context/ThemeContext';
import { useContext } from 'react';
const App = () => {
	const { theme } = useContext(ThemeContext);

	const appClass = `app ${theme}`;
	return (
		<div className={appClass}>
			<CartContextProvider>
				<Navbar />
				<div className='container'>
					<Routes>
						<Route exact path='/' element={<Home />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='/infoForm' element={<InfoForm />} />
					</Routes>
				</div>
			</CartContextProvider>
			<Footer />
		</div>
	);
};

export default App;
