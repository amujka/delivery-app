import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import InfoForm from './pages/infoForm/InfoForm';
import Footer from './components/footer/Footer';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CartContextProvider from './context/CartContext';
const App = () => {
	return (
		<>
			<CartContextProvider>
				<Navbar />
				<div className='app'>
					<Routes>
						<Route exact path='/' element={<Home />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='/infoForm' element={<InfoForm />} />
					</Routes>
				</div>
			</CartContextProvider>
			<Footer />
		</>
	);
};

export default App;
