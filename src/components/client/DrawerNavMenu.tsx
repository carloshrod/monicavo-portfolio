import { useStore } from '@nanostores/react';
import { isNavMenuOpen } from '../../store';
import type { ReactNode } from 'react';
import IconClose from './IconClose';

const DrawerNavMenu = ({ children }: { children: ReactNode }) => {
	const $isNavMenuOpen = useStore(isNavMenuOpen);
	const asideClass = $isNavMenuOpen
		? 'h-screen w-screen bg-[rgba(0,0,0,0.7)] z-30'
		: 'w-0 bg-transparent z-[-1]';
	const navClass = $isNavMenuOpen ? '' : '-translate-x-full';

	const handleCloseNavMenu = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			isNavMenuOpen.set(false);
		}
	};

	return (
		<aside
			className={`absolute top-0 transition-background delay-300 md:hidden ${asideClass}`}
			onClick={handleCloseNavMenu}
		>
			<nav
				className={`relative w-[230px] h-screen pt-[20px] flex flex-col items-center bg-stone-100 md:hidden rounded transition-transform duration-500 ${navClass}`}
				id='menu'
			>
				<IconClose
					className='absolute top-3 end-3 h-5 w-5 cursor-pointer'
					onClick={() => isNavMenuOpen.set(false)}
				/>
				{children}
			</nav>
		</aside>
	);
};

export default DrawerNavMenu;
