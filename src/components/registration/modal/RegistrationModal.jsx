import { useImperativeHandle, forwardRef, useRef } from 'react';
import { createPortal } from 'react-dom';
import '../registration.css';
import { assets } from '../../../assets/assets';
const RegistrationModal = forwardRef(({ theme }, ref) => {
	const registrationModal = useRef();
	return createPortal(
		<dialog
			open
			ref={registrationModal}
			className={`registration_modal registration_modal--${theme}`}
		>
			<div className='registration_modal__container'>
				<div className='registration_modal__header'>
					<h3 className='registration_modal__caption'>Sign up</h3>
					<button onClick={() => cartModal.current.close()}>
						<img src={assets.cross_icon} alt='x' />
					</button>
				</div>
				<input type='email' name='email' placeholder='email' />
				<input type='text' name='password' placeholder='password' />
				<button className='registration_modal__submit'>Sign up</button>
				<small>
					Already have an account? <span>Login here</span>
				</small>
			</div>
		</dialog>,
		document.getElementById('modal')
	);
});

export default RegistrationModal;
