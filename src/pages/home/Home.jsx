import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';
import CartContextProvider from '../../context/CartContext';
import './home.css';

const Home = () => {
	return (
		<div className='home'>
			<Header />
			<Menu />
		</div>
	);
};

export default Home;
