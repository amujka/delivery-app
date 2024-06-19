import { createPortal } from 'react-dom';
import { assets } from '../../assets/assets';
import './cartModal.css';
import { forwardRef, useRef, useImperativeHandle } from 'react';
const CartModal = forwardRef(({ modalTitle, theme, children }, ref) => {
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

	return createPortal(
		<dialog ref={cartModal} className={`modal modal--${theme}`}>
			<div className='modal__container'>
				<div className='modal__header'>
					<h3 className='modal__caption'>{modalTitle}</h3>
					<button onClick={() => cartModal.current.close()}>
						<img src={assets.cross_icon} alt='x' />
					</button>
				</div>
				{children}
			</div>
		</dialog>,
		document.getElementById('modal')
	);
});

export default CartModal;
