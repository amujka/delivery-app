import { useState, useContext } from 'react';
import { assets } from '../../assets/assets';
import { MenuContext } from '../../context/MenuContext';
const MenuItem = ({ _id, name, image, description, price, quantity }) => {
	const [showAmount, setShowAmount] = useState(false);
	const { selectMenuItem } = useContext(MenuContext);
	return (
		<li className='menu__item'>
			<div className='menu__item_top'>
				<figure>
					<img className='menu__item_image' src={image} alt={name} />
				</figure>
				<div className='menu__show_amount'>
					{showAmount ? (
						<div className='menu__item_amount'>
							<button onClick={() => selectMenuItem(_id, -1)}>
								<img src={assets.remove_icon_red} alt='remove' />
							</button>
							{quantity}
							<button onClick={() => selectMenuItem(_id, 1)}>
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
				<h3 className='menu__item_name'>{name}</h3>
				<p className='menu__item_description'>{description}</p>
				<p className='menu__item_price'>€ {price}</p>
			</div>
		</li>
	);
};

export default MenuItem;
