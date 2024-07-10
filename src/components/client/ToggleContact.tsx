import { useStore } from '@nanostores/react';
import { isContactOpen } from '../../store';

const ToggleContact = () => {
	const $isContactOpen = useStore(isContactOpen);

	return (
		<button
			className='relative inline-block cursor-pointer group border border-2 border-stone-950 px-4 text-center rounded'
			onClick={() => isContactOpen.set(!$isContactOpen)}
		>
			<span className='invisible font-bold block'>CONTACT</span>
			<span className='absolute inset-0 font-semibold group-hover:font-bold transition-all duration-200 block'>
				CONTACT
			</span>
		</button>
	);
};

export default ToggleContact;
