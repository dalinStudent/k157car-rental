import { DiscountType } from "@/common/enums/discount-type.enum";
import { Car } from "@/types/car.type";
import { formatCurrency } from "@/utils/Fomatters";

type Props = {
	size: 'xl' | 'base';
	item: Car;
};

export const DisplayAmount = (props: Props) => {
	return (
		<div className="flex items-end gap-1">
			<h3 className={`text-${props.size} text-[#0D1117] font-semibold`}>
				{props.item.discountType && props.item.discountAmount
					? (() => {
							const discountedPrice = props.item.discountType === DiscountType.Percentage
								? props.item.price - (props.item.price * props.item.discountAmount) / 100
								: props.item.price - props.item.discountAmount;
							return formatCurrency(discountedPrice);
						})()
					: formatCurrency(props.item.price)}
			</h3>
			{
				props.item.discountAmount && (
					<p
						className={`
							text-[#68717A] line-through
							text-${props.size === 'xl' ? 'sm mb-0.5' : 'xs mb-[3px]'}
						`}
					>
						{formatCurrency(props.item.price)}
					</p>
				)
			}
		</div>
	);
}