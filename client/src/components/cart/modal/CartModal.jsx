import { createPortal } from 'react-dom';
import { assets } from '../../../assets/assets';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../../store/cartSlice';
import './cartModal.css';
import { forwardRef, useRef, useImperativeHandle } from 'react';
import { useNavigate } from 'react-router-dom';
const CartModal = forwardRef(({ items, theme }, ref) => {
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

	const dispatch = useDispatch();

	const addItemHandler = (item) => {
		dispatch(addItem(item));
	};
	const removeItemHandler = (id) => {
		dispatch(removeItem(id));
	};

	const navigate = useNavigate();
	const navigateToCheckoutHandler = () => {
		cartModal.current.close();
		navigate('/checkout');
	};

	const totalPrice = items.reduce((total, item) => {
		return total + item.price * item.quantity;
	}, 0);

	return createPortal(
		<dialog ref={cartModal} className={`cart_modal cart_modal--${theme}`}>
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
											onClick={() => addItemHandler(item)}
										>
											+
										</span>
										<span>{item.quantity}</span>
										<span
											className='cart_modal__minus'
											onClick={() => removeItemHandler(item._id)}
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
					<button disabled={!items.length} onClick={navigateToCheckoutHandler}>
						Checkout
					</button>
				</div>
			</div>
		</dialog>,
		document.getElementById('modal')
	);
});

export default CartModal;
