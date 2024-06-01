import './navbar.css';
import { assets } from '../../assets/assets';
const Navbar = () => {
	return (
		<nav className='navbar'>
			<img className='navbar__logo' src={assets.logo} alt='logo' />
			<ul className='navbar__menu'>
				<li>home</li>
				<li>menu</li>
				<li>mobile app</li>
				<li>contact</li>
			</ul>
			<div className='navbar__icons_wrap'>
				<div>
					<img className='navbar__icon' src={assets.search_icon} alt='search' />
				</div>
				<div>
					<img className='navbar__icon' src={assets.basket_icon} alt='basket' />
				</div>
				<button>sign in</button>
			</div>
		</nav>
	);
};

export default Navbar;
