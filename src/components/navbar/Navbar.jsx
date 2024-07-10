import './navbar.css';
import { assets } from '../../assets/assets';
import { useContext, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';
import { logout } from '../../store/loginSlice';
import { useDispatch } from 'react-redux';
import CartModal from '../cart/modal/CartModal';
import RegistrationModal from '../registration/modal/RegistrationModal';
const Navbar = () => {
	const { toggleTheme, theme } = useContext(ThemeContext);
	const dispatch = useDispatch();
	const cartModal = useRef();
	const registrationModal = useRef();

	const items = useSelector((state) => state.cart.items);
	const user = useSelector((state) => state.login);

	const showCartModalHandler = () => {
		cartModal.current.openModal();
	};
	const showRegistrationModalHandler = () => {
		registrationModal.current.openModal();
	};
	return (
		<>
			<nav className='navbar'>
				<Link to={'/'}>
					<img className='navbar__logo' src={assets.logo} alt='logo' />
				</Link>
				<div className='navbar__icons_wrap'>
					<div className='navbar__theme_btn' onClick={toggleTheme}></div>
					<div className='navbar__cart' onClick={showCartModalHandler}>
						<img
							className='navbar__icon'
							src={assets.basket_icon}
							alt='cart'
						/>
						{items.length > 0 && <span></span>}
					</div>
					{user.email && (
						<button onClick={() => dispatch(logout())}>logout</button>
					)}
					{!user.email && (
						<button onClick={showRegistrationModalHandler}>login</button>
					)}
				</div>
			</nav>
			<CartModal ref={cartModal} items={items} theme={theme} />
			<RegistrationModal ref={registrationModal} theme={theme} />
		</>
	);
};

export default Navbar;
