'use client';

import Image from 'next/image';

export const BtnScrollToTop = () => {
	return (
		<button
			type="button"
			className="grid aspect-square h-[42px] place-items-center rounded-full gradient-dark"
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
		>
			<Image src="/svg/arrow-up.svg" alt="arrow-up" height={20} width={20} />
		</button>
	);
};
