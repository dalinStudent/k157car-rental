'use client';

import Image from 'next/image';

export const BtnScrollToTop = () => {
	return (
		<button
			type="button"
			className="grid aspect-square h-[42px] place-items-center rounded-[14px] bg-[#CD202A] sm:rounded-xl"
			onClick={() => window.scrollTo(0, 0)}
		>
			<Image src="/svg/arrow-up.svg" alt="arrow-up" height={20} width={20} />
		</button>
	);
};
