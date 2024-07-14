import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Checkout from './pages/checkout/Checkout';
import Footer from './components/footer/Footer';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContext';
import { useContext } from 'react';
const App = () => {
	const { theme } = useContext(ThemeContext);

	const appClass = `app ${theme}`;
	return (
		<div className={appClass}>
			<Navbar />
			<div className='container'>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/checkout' element={<Checkout />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
};

export default App;
