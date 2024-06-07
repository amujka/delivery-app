import './navbar.css';
import { assets } from '../../assets/assets';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
const Navbar = () => {
	const { items } = useContext(CartContext);
	return (
		<nav className='navbar'>
			<img className='navbar__logo' src={assets.logo} alt='logo' />
			<ul className='navbar__menu'>
				<li>home</li>
				<li>menu</li>
				<li>contact</li>
			</ul>
			<div className='navbar__icons_wrap'>
				<div>
					<img className='navbar__icon' src={assets.search_icon} alt='search' />
				</div>
				<div className='navbar__cart'>
					<img className='navbar__icon' src={assets.basket_icon} alt='cart' />
					{items.length > 0 && <span></span>}
				</div>
				<button>sign in</button>
			</div>
		</nav>
	);
};

export default Navbar;
