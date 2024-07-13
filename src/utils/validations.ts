interface Form {
	name: string;
	email: string;
	phone: string;
	message: string;
}

export const validateForm = (form: Form) => {
	const { name, email, phone, message } = form;
	const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
	const regexPhone = /^[1-9][0-9]*$/;

	if (!name || !email || !phone || !message) {
		return 'All fields required!';
	} else if (!regexPhone.test(phone)) {
		return 'Enter a valid phone number!';
	} else if (!regexEmail.test(email)) {
		return 'Enter a valid email address!';
	}

	return '';
};
