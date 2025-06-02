import Image from 'next/image';
import { useState } from 'react';
import { CustomConfirmModal } from './CustomConfirmModal';


type Props = {
	value: number;
	maximum?: number;
	enableRemove?: boolean;
	onValueChange: (value: number) => void;
	onRemovedConfirm?: () => void;
};

export const QuantityCounter = (props: Props) => {
	const [counter, setCounter] = useState<number>(props.value);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const handleIncrement = () => {
		if (counter < (props.maximum || Infinity)) {
			setCounter(prev => prev + 1);
			props.onValueChange(counter + 1);
		}
	};

	const handleDecrement = () => {
		if (counter > 1) {
			setCounter(prev => prev - 1);
			props.onValueChange(counter - 1);
		} else if (props.enableRemove && counter - 1 === 0) {
			setIsModalOpen(true);
		}
	};

	const handleRemove = () => {
		props.onRemovedConfirm?.();
		setIsModalOpen(false);
	};

	return (
		<>
			<div className="flex items-center bg-[#E5E5E5] rounded-full gap-4 px-3 py-2">
				<button type="button" onClick={() => handleDecrement()}>
					{
						props.enableRemove && counter === 1
							? (
									<div className="w-[24px] h-[24px] grid place-items-center">
										<Image
											src="/svg/delete.svg"
											alt="delete"
											width={18}
											height={18}
											className="cursor-pointer"
										/>
									</div>
								)
							: (
									<Image
										src="/svg/remove-rounded.svg"
										alt="decrease"
										width={24}
										height={24}
										className="cursor-pointer"
									/>
								)
					}
				</button>
				<h3 className="min-w-3 font-semibold">{counter}</h3>
				<button type="button" onClick={() => handleIncrement()}>
					<Image
						src="/svg/add-rounded.svg"
						alt="increase"
						width={24}
						height={24}
						className="cursor-pointer"
					/>
				</button>
			</div>

			{
				isModalOpen && (
					<CustomConfirmModal
						isModalOpen={isModalOpen}
						title="Remove Item"
						description="Are you sure you want to remove this item?"
						btnPrimaryText="Remove"
						onCancel={() => setIsModalOpen(false)}
						onConfirm={() => handleRemove()}
					/>
				)
			}
		</>
	);
};
