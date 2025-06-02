import Image from 'next/image';
import { addToCart, removeFromCart } from "@/libs/cartSlice";
import { useAppDispatch, useAppSelector } from "@/libs/hooks";
import { Car } from "@/types/car.type";
import { useState } from "react";
import { formatCurrency } from '@/utils/Fomatters';
import { DisplayAmount } from './DisplayAmount';
import { CustomModal } from '../CustomModal';
import { CarGalleries } from './CarGalleries';
import { QuantityCounter } from '../QuantityCounter';
import { DiscountType } from '@/common/enums/discount-type.enum';

type Props = {
	item: Car;
	isModalOpen: boolean;
	onAddToCart: (quantity: number) => void;
	onClose: () => void;
};

export const CarDetails = (props: Props) => {
    const dispatch = useAppDispatch();
    const cart = useAppSelector(state => state.cart.items); 
    const cartItem = cart.find(item => item.car.id === props.item.id);
    const [quantity, setQuantity] = useState<number>(cartItem ? cartItem.quantity : 1);
	const [selectedImage, setSelectedImage] = useState<string>(props.item.imageUrl);

	const handleAddToCart = () => {
		dispatch(addToCart({
			car: props.item,
			quantity,
		}));
		props.onClose();
	};
    const handleRemoveFromCart = () => {
		dispatch(removeFromCart(props.item.id));
	};

    return (
		<CustomModal
			width={1200}
			height={650}
			isModalOpen={props.isModalOpen}
			onClose={() => props.onClose()}
		>
			<div className="flex h-full">
				<div className="flex-1 flex flex-col gap-8 p-8">
					<div className="flex items-center justify-between gap-2">
						<Image
							src="/images/champa-spa-logo.png"
							alt="champa-spa-logo"
							width={40}
							height={40}
						/>
						<h3 className="text-xl font-semibold">Champa Spa</h3>
						<div className="flex-1"></div>
						{
							props.item.discountAmount && props.item.discountType && (
								<div className="primary-gradient px-2 py-1 rounded-lg text-white text-sm">
									{props.item.discountType === DiscountType.Percentage
										? `${props.item.discountAmount}% Off`
										: `${formatCurrency(props.item.discountAmount)} Off`}
								</div>
							)
						}
					</div>

					<div className="flex flex-col gap-6">
						<div className="relative w-full aspect-video">
							<Image
								src={selectedImage}
								alt={props.item.name}
								fill
								className="object-cover rounded-2xl"
							/>
						</div>

						<CarGalleries
							galleries={props.item.galleries}
							selectedImage={selectedImage}
							onSelectImage={image => setSelectedImage(image)}
						/>
					</div>
				</div>

				<div className="w-[435] h-full flex flex-col border-l border-[#F5F5F5] pt-[44px] overflow-hidden">
					<div className="flex flex-col gap-3 p-6 pt-0 flex-1 overflow-auto">
						<div className="flex flex-col gap-1">
							<h3 className="text-xl text-[#0D1117] font-semibold">{props.item.name}</h3>
							<p className="text-sm text-[#CD202A]">{props.item.category.name}</p>
						</div>

						<div className="flex flex-col gap-1">
							<p className="font-lexend">{props.item.description}</p>
							<div className="flex justify-center">
								<p className="text-sm text-[#CD202A]">See more</p>
								<Image
									src="/svg/keyboard-arrow-down.svg"
									alt="keyboard-arrow-down"
									width={20}
									height={20}
								/>
							</div>
						</div>

						<div
							className="w-full p-5 flex flex-col gap-3"
							style={{
								backgroundImage: `url('/images/map-bg.png')`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
							}}
						>
							<div className="flex justify-start items-center gap-1">
								<Image src="/svg/share-location.svg" alt="share-location" width={24} height={24} />
								<h4 className="text-[#3D4248] font-semibold">Available At</h4>
							</div>

							{/* <div className="flex gap-4 flex-row overflow-auto hide-scrollbar">
								{MerchantInfo.locations.map(location => (
									<LocationItem
										isFullWidth
										background="bg-white"
										widthText="sm:w-[232px]"
										key={location.name}
										data={location}
									/>
								))}
							</div> */}
						</div>

						<div className="flex flex-col gap-1">
							<h4 className="text-sm font-semibold text-[#68717A]">Disclaimer:</h4>
							<p className="text-sm text-[#68717A]">
								All ticket sales are final. No refunds or exchanges
								will be issued. Your pass is valid to use within 30 days from the date of being
								purchased.
							</p>
						</div>
					</div>

					<div className="flex flex-col p-4 pb-6 gap-3 add-to-cart-footer">
						<div className="flex items-center justify-between">
							<div className="flex flex-col px-1 gap-1">
								<p className="text-xs text-[#68717A]">Price</p>
								<DisplayAmount size="xl" item={props.item} />
							</div>

							<QuantityCounter
								value={quantity}
								maximum={9}
								onValueChange={value => setQuantity(value)}
								onRemovedConfirm={() => handleRemoveFromCart()}
							/>
						</div>

						<button
							type="button"
							className="text-white bg-[#CD202A] rounded-full py-3 px-4 cursor-pointer hover:bg-[#A81C24] transition-all duration-200"
							onClick={() => handleAddToCart()}
						>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</CustomModal>
	);
}
