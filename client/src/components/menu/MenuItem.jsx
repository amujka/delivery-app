import { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import { addItem, removeItem } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';
const MenuItem = ({ item, quantity }) => {
	const [showAmount, setShowAmount] = useState(false);
	const dispatch = useDispatch();

	const addItemHandler = (item) => {
		dispatch(addItem(item));
	};

	const removeItemHandler = (id) => {
		if (quantity > 0) {
			dispatch(removeItem(id));
		} else {
			setShowAmount((prev) => !prev);
		}
	};

	return (
		<li className='menu__item'>
			<div className='menu__item_top'>
				<figure>
					<img
						className='menu__item_image'
						src={`http://localhost:4000/images/${item.image}`}
						alt={item.name}
					/>
				</figure>
				<div className='menu__show_amount'>
					{showAmount ? (
						<div className='menu__item_btns_wrap'>
							<button onClick={() => removeItemHandler(item._id)}>
								<img src={assets.remove_icon_red} alt='remove' />
							</button>
							<span className='menu__item_amount'>{quantity}</span>
							<button onClick={() => addItemHandler(item)}>
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
				<h3 className='menu__item_name'>{item.name}</h3>
				<p className='menu__item_description'>{item.description}</p>
				<p className='menu__item_price'>€ {item.price}</p>
			</div>
		</li>
	);
};

export default MenuItem;
