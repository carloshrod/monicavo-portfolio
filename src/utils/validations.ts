interface Form {
	name: string;
	email: string;
	phone: string;
	message: string;
}

export const validateForm = (form: Form, isSpanish: boolean) => {
	const { name, email, phone, message } = form;
	const regexPhone = /^[1-9][0-9]*$/;
	const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

	if (!name || !email || !phone || !message) {
		return isSpanish
			? 'Todos los campos son requeridos'
			: 'All fields required';
	} else if (!regexPhone.test(phone)) {
		return isSpanish
			? 'Ingresa un número de teléfono válido'
			: 'Enter a valid phone number';
	} else if (!regexEmail.test(email)) {
		return isSpanish
			? 'Ingresa un email válido'
			: 'Enter a valid email address';
	}

	return '';
};
