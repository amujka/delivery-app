import { createPortal } from 'react-dom';
import { forwardRef } from 'react';
const CartModal = forwardRef((props, ref) => {
	return createPortal(
		<dialog
			ref={ref}
			className='bg-green-500 w-64 fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30'
		>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe
				perspiciatis ducimus aspernatur cum, reprehenderit rerum et alias magnam
				minus quasi recusandae. Officiis at doloribus aperiam sit rem odit
				similique!
			</p>
		</dialog>,
		document.getElementById('modal')
	);
});

export default CartModal;
