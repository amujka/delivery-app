import './header.css';
import { assets } from '../../assets/assets';
const Header = () => {
	return (
		<header className='header'>
			<div className='header__content'>
				<h2>Order your favorite food here</h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
					quo veritatis illo! Quo dolor consequuntur sit velit. Impedit
					perspiciatis doloribus debitis tenetur nesciunt vitae quidem sapiente
					aspernatur, consectetur sit velit?
				</p>
				<button>View menu</button>
			</div>
		</header>
	);
};
export default Header;
