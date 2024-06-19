import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './cart.css';
const Cart = () => {
	const { items, addToCart } = useContext(CartContext);
	const totalPrice = items.reduce((total, item) => {
		return total + item.price * item.quantity;
	}, 0);

	return (
		<>
			<div className='cart__item_list'>
				{!items.length && <p>Cart is currently empty</p>}
				{items.length > 0 &&
					items.map((item) => {
						return (
							<div className='cart__item' key={item._id}>
								<span>
									{item.name} (€ {item.price}):
								</span>
								<div className='cart__amount'>
									<span
										className='cart__plus'
										onClick={() => addToCart(item, 1)}
									>
										+
									</span>
									<span>{item.quantity}</span>
									<span
										className='cart__minus'
										onClick={() => addToCart(item, -1)}
									>
										-
									</span>
								</div>
							</div>
						);
					})}
			</div>
			<div className='cart__total'>Total: € {totalPrice}</div>
			<div className='cart__btns_wrap'>
				<button onClick={() => cartModal.current.close()}>
					Continue shopping
				</button>
				<button disabled={!items.length}>Checkout</button>
			</div>
		</>
	);
};

export default Cart;
