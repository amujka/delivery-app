import './navbar.css';
import { assets } from '../../assets/assets';
import { useContext, useRef } from 'react';
import { CartContext } from '../../context/CartContext';
import { ThemeContext } from '../../context/ThemeContext';
import CartModal from '../modal//CartModal';
const Navbar = () => {
	const { items, addToCart } = useContext(CartContext);
	const { toggleTheme, theme } = useContext(ThemeContext);
	const cartModal = useRef();

	const showModalHandler = () => {
		cartModal.current.openModal();
	};

	return (
		<>
			<nav className='navbar'>
				<img className='navbar__logo' src={assets.logo} alt='logo' />
				<div className='navbar__icons_wrap'>
					<div className='navbar__theme_btn' onClick={toggleTheme}></div>
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
			<CartModal ref={cartModal} items={items} addToCart={addToCart} />
		</>
	);
};

export default Navbar;
