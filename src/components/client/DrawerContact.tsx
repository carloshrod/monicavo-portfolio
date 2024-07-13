import type { ReactNode } from 'react';
import { useStore } from '@nanostores/react';
import { isContactOpen } from '../../store';
import ButtonClose from './ButtonClose';

const DrawerContact = ({ children }: { children: ReactNode }) => {
	const $isContactOpen = useStore(isContactOpen);
	const asideClass = $isContactOpen
		? 'h-screen w-screen bg-[rgba(0,0,0,0.7)] z-30'
		: 'w-0 bg-transparent z-[-1]';
	const navClass = $isContactOpen ? '' : 'translate-x-full';

	const handleCloseNavMenu = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			isContactOpen.set(false);
		}
	};

	return (
		<aside
			className={`absolute top-0 end-0 transition-background delay-200 ${asideClass}`}
			onClick={handleCloseNavMenu}
		>
			<nav
				className={`absolute end-0 w-screen max-w-[500px] h-screen pt-[20px] pb-6 flex flex-col items-center bg-stone-100 rounded overflow-auto transition-transform duration-500 ${navClass}`}
				id='menu'
			>
				<ButtonClose
					className='absolute top-3 start-3 h-5 w-5 cursor-pointer'
					onClick={() => isContactOpen.set(false)}
				/>
				{children}
			</nav>
		</aside>
	);
};

export default DrawerContact;
