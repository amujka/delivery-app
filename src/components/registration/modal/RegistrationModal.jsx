import { useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

const RegistrationModal = useImperativeHandle((props, ref) => {
	const registrationModal = useRef();
	return createPortal(
		<dialog ref='registrationModal'>REGISTRATION PORTAL</dialog>,
		document.getElementById('modal')
	);
});

export default RegistrationModal;
