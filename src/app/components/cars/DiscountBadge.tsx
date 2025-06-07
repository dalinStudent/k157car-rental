import { DiscountType } from "@/common/enums/discount-type.enum";
import { formatCurrency } from "@/utils/Fomatters";

type Props = {
	amount: number;
	type: DiscountType;
};

export const DiscountBadge = ({ amount, type }: Props) => {
	const text =
    type === DiscountType.Percentage
      ? `${amount}% Off`
      : `${formatCurrency(amount)} Off`;
    return (
		<span className="text-xs text-[#0D1117] bg-yellow-100 rounded-full px-3 py-1">
			{text}
		</span>
	);
}