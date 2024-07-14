import { Outlet } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation';
import logo from '../assets/logo.png';

const Root = () => {
	return (
		<>
			<header>
				<div>
					<figure className='header__logo'>
						<img src={logo} alt='' />
					</figure>
					<p>Admin panel</p>
				</div>
				<div>admin user</div>
			</header>
			<div className='container'>
				<Navigation />
				<Outlet />
			</div>
		</>
	);
};

export default Root;
