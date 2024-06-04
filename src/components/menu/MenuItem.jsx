import { useState } from 'react';
import { assets } from '../../assets/assets';

const MenuItem = ({ menuItem, amount = 0, ...orderProps }) => {
	const [showAmount, setShowAmount] = useState(false);
	return (
		<li className='menu__item'>
			<div className='menu__item_top'>
				<figure>
					<img
						className='menu__item_image'
						src={menuItem.image}
						alt={menuItem.name}
					/>
				</figure>
				<div className='menu__show_amount'>
					{showAmount ? (
						<div className='menu__item_amount'>
							<button onClick={() => orderProps.onRemove(menuItem._id)}>
								<img src={assets.remove_icon_red} alt='remove' />
							</button>
							{amount}
							<button
								className=''
								onClick={() => orderProps.onOrder(menuItem._id)}
							>
								<img src={assets.add_icon_green} alt='add' />
							</button>
						</div>
					) : (
						<button
							className='menu__show_amount_btn'
							onClick={() => setShowAmount((prev) => !prev)}
						>
							<img src={assets.add_icon_white} alt='show' />
						</button>
					)}
				</div>
			</div>
			<div className='menu__item_bottom'>
				<h3 className='menu__item_name'>{menuItem.name}</h3>
				<p className='menu__item_description'>{menuItem.description}</p>
				<p className='menu__item_price'>€ {menuItem.price}</p>
			</div>
		</li>
	);
};

export default MenuItem;
