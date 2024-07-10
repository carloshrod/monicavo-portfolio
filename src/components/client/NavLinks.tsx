const NavLinks = ({ className }: { className: string }) => {
	return (
		<div className={className}>
			<a
				href='/portfolio/sessions'
				className='relative inline-block text-center group border border-2 border-transparent'
			>
				<span className='invisible font-bold block'>PORTFOLIO</span>
				<span className='absolute inset-0 font-semibold group-hover:font-bold transition-all duration-200 block'>
					PORTFOLIO
				</span>
			</a>
			<a
				href='/about-me'
				className='relative inline-block text-center group border border-2 border-transparent'
			>
				<span className='invisible font-bold block'>ABOUT ME</span>
				<span className='absolute inset-0 font-semibold group-hover:font-bold transition-all duration-200 block'>
					ABOUT ME
				</span>
			</a>
		</div>
	);
};

export default NavLinks;
