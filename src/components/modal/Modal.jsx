import { createPortal } from 'react-dom';

const Modal = () => {
	return (
		<div>
			<p>This child is placed in the parent div.</p>
			{createPortal(
				<dialog>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Asperiores, saepe perspiciatis ducimus aspernatur cum,
						reprehenderit rerum et alias magnam minus quasi recusandae.
						Officiis at doloribus aperiam sit rem odit similique!
					</p>
				</dialog>,
				document.getElementById('modal')
			)}
		</div>
	);
};

export default Modal;
