import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';
import CartContextProvider from '../../context/CartContext';
import './home.css';

const Home = () => {
	return (
		<div className='home'>
			<CartContextProvider>
				<Header />
				<Menu />
			</CartContextProvider>
			<Footer />
		</div>
	);
};

export default Home;
