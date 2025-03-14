import { useState, type ChangeEvent, type FormEvent } from 'react';
import { formatInputPhone } from '../../utils/formatInput';
import { validateForm } from '../../utils/validations';
import emailjs from '@emailjs/browser';

interface FormState {
	name: string;
	company: string;
	email: string;
	country: string;
	phone: string;
	message: string;
	agreeToPolicies: boolean;
	[key: string]: string | boolean;
}

const initialForm = {
	name: '',
	company: '',
	email: '',
	country: '',
	phone: '',
	message: '',
	agreeToPolicies: false,
};

const ContactForm = ({ currentLang }: { currentLang: string }) => {
	const [form, setForm] = useState<FormState>(initialForm);
	const [error, setError] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);
	const [isFormSend, setIsFormSend] = useState<boolean>(false);

	const isSpanish = currentLang === 'es';

	const INPUT_PROPS = [
		{
			name: 'name',
			placeholder: isSpanish ? '*Tu nombre' : '*Your name',
		},
		{
			name: 'email',
			placeholder: isSpanish ? '*tuemail@mail.com' : '*youremail@mail.com',
		},
		{
			name: 'phone',
			placeholder: '*+34 123 45 67 89',
		},
	];

	const handleInputChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value, type } = event.target;
		if (type === 'checkbox') {
			const { checked } = event.target as HTMLInputElement;
			setForm({
				...form,
				[name]: checked,
			});
		} else {
			const finalValue = name === 'phone' ? formatInputPhone(value) : value;

			setForm({
				...form,
				[name]: finalValue,
			});
		}
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);
		const formError = validateForm(form, isSpanish);
		setError(formError);
		try {
			if (formError) return;
			const res = await emailjs.send(
				import.meta.env.PUBLIC_EMAIL_SERVICE_ID,
				import.meta.env.PUBLIC_EMAIL_TEMPLATE_ID,
				form,
				import.meta.env.PUBLIC_EMAIL_KEY,
			);
			if (res.status === 200) {
				setIsFormSend(true);
				setForm(initialForm);
				setError('');
			}
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
			setTimeout(() => {
				setIsFormSend(false);
			}, 3000);
		}
	};

	return (
		<form
			className='w-full max-w-[400px] flex flex-col justify-center items-center gap-4'
			onSubmit={handleSubmit}
		>
			{INPUT_PROPS.map(({ name, placeholder }) => (
				<input
					key={`id-${name}`}
					className='w-full h-[34px] px-4 text-stone-800 border border-stone-800 focus:outline-none'
					name={name}
					value={form[name] as string}
					type='text'
					placeholder={placeholder}
					onChange={handleInputChange}
				/>
			))}
			<textarea
				className='w-full px-4 p-1 text-stone-800 border border-stone-800 resize-none focus:outline-none'
				name='message'
				value={form.message}
				placeholder={isSpanish ? '*Tu mensaje' : '*Your message'}
				rows={4}
				onChange={handleInputChange}
			/>
			{error ? (
				<span
					className='w-full py-2 px-4 bg-stone-200 text-xs text-red-600 rounded bg-shadow '
					role='alert'
				>
					{error}
				</span>
			) : null}
			{isFormSend ? (
				<span
					className='w-full py-2 px-4 bg-stone-200 text-center text-sm text-green-500 rounded bg-shadow'
					role='alert'
				>
					{isSpanish ? 'Mensaje enviado ✔' : 'Message sent ✔'}
				</span>
			) : null}
			<button
				className='w-[90%] max-w-56 h-[44px] max-h-11 py-2 px-4 bg-stone-800 hover:bg-none hover:bg-stone-100 text-stone-100 hover:text-stone-800 hover:border-stone-800 hover:border-[2px] flex justify-center items-center md:text-lg font-semibold cursor-pointer shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] disabled:bg-stone-300 disabled:border-none disabled:cursor-not-allowed'
				disabled={loading}
			>
				{isSpanish ? 'Enviar' : 'Send'}
			</button>
		</form>
	);
};

export default ContactForm;
