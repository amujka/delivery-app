import './navigation.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav className='navigation'>
			<ul className='navigation__list'>
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? 'active' : undefined)}
						to={'/'}
					>
						Food list
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? 'active' : undefined)}
						to={'/add-new'}
					>
						Add new food items
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
