import { DiscountType } from "@/common/enums/discount-type.enum";
import { formatCurrency } from "@/utils/Fomatters";

type Props = {
	amount: number;
	type: DiscountType;
};

export const DiscountBadge = ({ amount, type }: Props) => {
    return (
		<div className="primary-gradient absolute top-0 left-2 py-1 px-2 rounded-b-lg">
			<p className="text-white text-sm">
				{type === DiscountType.Percentage
					? `${amount}% Off`
					: `${formatCurrency(amount)} Off`}
			</p>
		</div>
	);
}