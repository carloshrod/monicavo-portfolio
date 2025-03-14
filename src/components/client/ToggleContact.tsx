import { useStore } from '@nanostores/react';
import { isContactOpen } from '../../store';

const ToggleContact = ({ btnLabel }: { btnLabel: string }) => {
	const $isContactOpen = useStore(isContactOpen);

	return (
		<button
			className='relative inline-block cursor-pointer group border-2 border-stone-950 px-4 rounded'
			aria-label='Toggle contact drawer'
			onClick={() => isContactOpen.set(!$isContactOpen)}
		>
			<span className='invisible font-bold block'>{btnLabel}</span>
			<span className='absolute top-[1px] inset-0 font-semibold group-hover:font-bold transition-all duration-200 block'>
				{btnLabel}
			</span>
		</button>
	);
};

export default ToggleContact;
