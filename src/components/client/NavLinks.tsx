const NavLinks = ({
	className,
	linkLabels,
	currentLang,
	getRelativeLocaleUrl,
}: {
	className: string;
	linkLabels: string[];
	currentLang: string;
	getRelativeLocaleUrl: (lang: string, path: string) => string;
}) => {
	const label1 = linkLabels?.length > 0 && linkLabels[0];
	const label2 = linkLabels?.length > 0 && linkLabels[1];

	return (
		<div className={className}>
			<a
				href={getRelativeLocaleUrl(currentLang, '/portfolio/sessions')}
				className='relative inline-block text-center group border-2 border-transparent'
			>
				<span className='invisible font-bold block'>{label1}</span>
				<span className='absolute top-[1px] inset-0 font-semibold group-hover:font-bold transition-all duration-200 block'>
					{label1}
				</span>
			</a>
			<a
				href={getRelativeLocaleUrl(currentLang, '/about-me')}
				className='relative inline-block text-center group border-2 border-transparent'
			>
				<span className='invisible font-bold block'>{label2}</span>
				<span className='absolute top-[1px] inset-0 font-semibold group-hover:font-bold transition-all duration-200 block'>
					{label2}
				</span>
			</a>
		</div>
	);
};

export default NavLinks;
