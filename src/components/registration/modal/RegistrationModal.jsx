import { useImperativeHandle, forwardRef, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import '../registration.css';
import { assets } from '../../../assets/assets';
const RegistrationModal = forwardRef(({ theme }, ref) => {
	const registrationModal = useRef();
	useImperativeHandle(ref, () => {
		return {
			openModal() {
				registrationModal.current.showModal();
			},
			closeModal() {
				registrationModal.current.close();
			},
		};
	});

	const [userData, setUserData] = useState({ email: '', password: '' });
	const [accountExist, setAccountExist] = useState(false);

	return createPortal(
		<dialog
			ref={registrationModal}
			className={`registration_modal registration_modal--${theme}`}
		>
			<div className='registration_modal__container'>
				<div className='registration_modal__header'>
					<h3 className='registration_modal__caption'>
						{accountExist && 'Login'}
						{!accountExist && 'Sign up'}
					</h3>
					<button onClick={() => registrationModal.current.close()}>
						<img src={assets.cross_icon} alt='x' />
					</button>
				</div>

				<input type='email' name='email' placeholder='email' />
				<input type='text' name='password' placeholder='password' />
				<button className='registration_modal__submit'>
					{accountExist ? 'Login' : 'Create account'}
				</button>
				{accountExist && (
					<small>
						Don't have an account?{' '}
						<button onClick={() => setAccountExist((prev) => !prev)}>
							<span>Sign up here</span>
						</button>
					</small>
				)}
				{!accountExist && (
					<small>
						Already have an account?{' '}
						<button onClick={() => setAccountExist((prev) => !prev)}>
							<span>Login here</span>
						</button>
					</small>
				)}
			</div>
		</dialog>,
		document.getElementById('modal')
	);
});

export default RegistrationModal;
