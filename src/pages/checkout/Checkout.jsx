import './checkout.css';
import { useSelector } from 'react-redux';
const Checkout = () => {
	const items = useSelector((state) => state.cart.items);
	const totalPrice = useSelector((state) =>
		state.cart.items.reduce((total, item) => total + item.quantity * item.price, 0)
	);

	return (
		<div className='checkout'>
			<h1 className='checkout__title'>Checkout</h1>
			<div className='checkout__details_wrapper'>
				<div className='checkout__delivery_details'>
					<h2>Delivery Details</h2>
					<form>
						<div className='checkout__input_wrapper'>
							<input
								type='text'
								name='firstName'
								placeholder='First name'
							/>
							<input type='text' name='lastName' placeholder='Last name' />
						</div>
						<input type='email' name='email' placeholder='Email' />
						<input type='text' name='telephone' placeholder='Telephone' />
						<input type='text' name='street' placeholder='Street' />
						<div className='checkout__input_wrapper'>
							<input type='text' name='city' placeholder='City' />
							<input type='text' name='state' placeholder='State' />
						</div>
						<div className='checkout__input_wrapper'>
							<input type='text' name='zipCode' placeholder='Zip code' />
							<input type='text' name='country' placeholder='Country' />
						</div>
					</form>
				</div>
				<div className='checkout__cart_details'>
					<h2>Cart Totals</h2>
					<ul className='checkout__items_list'>
						{items.map((item) => {
							return (
								<li className='checkout__item' key={item._id}>
									<span>
										{item.name} {item.quantity}x
									</span>
									<span>€{item.price * item.quantity}</span>
								</li>
							);
						})}
					</ul>
					<p className='checkout__items_total_price'>
						<span>Total:</span> <span>€{totalPrice}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
