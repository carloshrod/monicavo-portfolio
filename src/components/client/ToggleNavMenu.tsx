import { useStore } from '@nanostores/react';
import { isNavMenuOpen } from '../../store';

const ToggleNavMenu = () => {
	const $isNavMenuOpen = useStore(isNavMenuOpen);

	return (
		<button
			className='self-end cursor-pointer min-[768px]:hidden'
			type='button'
			onClick={() => isNavMenuOpen.set(!$isNavMenuOpen)}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 28 28'
				width='28px'
				height='28px'
			>
				<path d='M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z'></path>
			</svg>
		</button>
	);
};

export default ToggleNavMenu;
