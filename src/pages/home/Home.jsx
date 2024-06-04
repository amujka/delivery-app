import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';
import './home.css';

const Home = () => {
	return (
		<div className='home'>
			<Header />
			<Menu />
			<Footer />
		</div>
	);
};

export default Home;
