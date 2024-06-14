import { createPortal } from 'react-dom';
import { assets } from '../../assets/assets';
import './cartModal.css';
import { forwardRef, useRef, useImperativeHandle } from 'react';
const CartModal = forwardRef(({ items, addToCart }, ref) => {
	const cartModal = useRef();
	useImperativeHandle(
		ref,
		() => {
			return {
				openModal() {
					cartModal.current.showModal();
				},
				closeModal() {
					cartModal.current.close();
				},
			};
		},
		[]
	);

	const totalPrice = items.reduce((total, item) => {
		return total + item.price * item.quantity;
	}, 0);

	return createPortal(
		<dialog ref={cartModal} className='cart_modal'>
			<div className='cart_modal__container'>
				<div className='cart_modal__header'>
					<h3 className='cart_modal__caption'>Your cart</h3>
					<button onClick={() => cartModal.current.close()}>
						<img src={assets.cross_icon} alt='x' />
					</button>
				</div>
				<div className='cart_modal__item_list'>
					{!items.length && <p>Cart is currently empty</p>}
					{items.length > 0 &&
						items.map((item) => {
							return (
								<div className='cart_modal__item' key={item._id}>
									<span>
										{item.name} (€ {item.price}):
									</span>
									<div className='cart_modal__amount'>
										<span
											className='cart_modal__plus'
											onClick={() => addToCart(item, 1)}
										>
											+
										</span>
										<span>{item.quantity}</span>
										<span
											className='cart_modal__minus'
											onClick={() => addToCart(item, -1)}
										>
											-
										</span>
									</div>
								</div>
							);
						})}
				</div>
				<div className='cart_modal__total'>Total: € {totalPrice}</div>
				<div className='cart_modal__btns_wrap'>
					<button onClick={() => cartModal.current.close()}>
						Continue shopping
					</button>
					<button disabled={!items.length}>Checkout</button>
				</div>
			</div>
		</dialog>,
		document.getElementById('modal')
	);
});

export default CartModal;
