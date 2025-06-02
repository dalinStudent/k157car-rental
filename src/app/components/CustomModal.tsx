import { Modal } from "antd";
import Image from 'next/image';
import React from 'react';

type Props = {
	isModalOpen: boolean;
	children: React.ReactNode;
	onClose: () => void;
	width: number;
	height: number;
};

export const CustomModal = (props: Props) => {
	return (
		<Modal
			centered
			width={props.width}
			height={props.height}
			footer={null}
			closable={false}
			open={props.isModalOpen}
			className="custom-modal relative"
		>
			<button
				type="button"
				className="absolute top-0 right-0 w-[44px] h-[44px] bg-[#9AA0A880] rounded-bl-2xl grid place-items-center cursor-pointer hover:bg-[#9AA0A8] transition-all duration-200"
				onClick={() => props.onClose()}
			>
				<Image
					src="/svg/close.svg"
					alt="close"
					width={20}
					height={20}
				/>
			</button>

			{props.children}
		</Modal>
	);
}