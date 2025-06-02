import { Modal } from 'antd';
import React from 'react';

type Props = {
	isModalOpen: boolean;
	title: string;
	description: string;
	btnPrimaryText: string;
	onCancel: () => void;
	onConfirm: () => void;
};

export const CustomConfirmModal = (props: Props) => {
	return (
		<Modal
			centered
			width={361}
			footer={null}
			closable={false}
			open={props.isModalOpen}
			className="custom-modal"
		>
			<div className="flex flex-col gap-6 p-6 items-center justify-center">
				<div className="flex flex-col items-center gap-4">
					<h3 className="text-xl text-[#161B22] font-semibold">{props.title}</h3>
					<p className="text-[#3D4248]">{props.description}</p>
				</div>

				<div className="flex items-center justify-center gap-3">
					<button
						type="button"
						className="w-[150px] px-4 py-3 rounded-full bg-[#D6DADD] cursor-pointer hover:bg-[#C1C4C7] transition-all duration-200"
						onClick={() => props.onCancel()}
					>
						<span className="text-[#0D1117]">Cancel</span>
					</button>

					<button
						type="button"
						className="w-[150px] px-4 py-3 rounded-full bg-[#CE1E2C] cursor-pointer hover:bg-[#A81C24] transition-all duration-200"
						onClick={() => props.onConfirm()}
					>
						<span className="text-white">{props.btnPrimaryText}</span>
					</button>
				</div>
			</div>
		</Modal>
	);
};
