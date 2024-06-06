import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';
import MenuContextProvider from '../../context/MenuContext';
import './home.css';

const Home = () => {
	console.log('home');
	return (
		<div className='home'>
			<MenuContextProvider>
				<Header />
				<Menu />
			</MenuContextProvider>
			<Footer />
		</div>
	);
};

export default Home;
