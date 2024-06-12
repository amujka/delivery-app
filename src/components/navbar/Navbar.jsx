import './navbar.css';
import { assets } from '../../assets/assets';
import { useContext, useRef } from 'react';
import { CartContext } from '../../context/CartContext';
import CartModal from '../modal//CartModal';
const Navbar = () => {
	const { items } = useContext(CartContext);
	const cartModal = useRef();

	const showModalHandler = () => {
		console.log('hello world');
		cartModal.current.showModal();
	};
	return (
		<>
			<nav className='navbar'>
				<img className='navbar__logo' src={assets.logo} alt='logo' />
				<ul className='navbar__menu'>
					<li>home</li>
					<li>menu</li>
					<li>contact</li>
				</ul>
				<div className='navbar__icons_wrap'>
					<div>
						<img
							className='navbar__icon'
							src={assets.search_icon}
							alt='search'
						/>
					</div>
					<div className='navbar__cart' onClick={showModalHandler}>
						<img
							className='navbar__icon'
							src={assets.basket_icon}
							alt='cart'
						/>
						{items.length > 0 && <span></span>}
					</div>
					<button>sign in</button>
				</div>
			</nav>
			<CartModal ref={cartModal} />
		</>
	);
};

export default Navbar;
