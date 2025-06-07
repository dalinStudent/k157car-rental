import { DiscountType } from "@/common/enums/discount-type.enum";
import { Car } from "@/types/car.type";
import { formatCurrency } from "@/utils/Fomatters";

type Props = {
  size: "xl" | "base";
  item: Car;
};

export const DisplayAmount = ({ item }: Props) => {
	const hasDiscount = item.discountAmount && item.discountType;
	const getPrice = (base: number) =>
	  hasDiscount
		? item.discountType === DiscountType.Percentage
		  ? base - (base * item.discountAmount!) / 100
		  : base - item.discountAmount!
		: base;
  
	const prices = [
	  { label: "day", value: getPrice(item.pricePerDay) },
	  { label: "week", value: getPrice(item.pricePerWeek) },
	  { label: "month", value: getPrice(item.pricePerMonth) },
	];
  
	return (
	  <div className="flex flex-wrap gap-2">
		{prices.map((p) => (
		  <span
			key={p.label}
			className="text-xs text-[#0D1117] bg-[#F5F5F5] rounded-full px-3 py-1"
		  >
			{formatCurrency(p.value)} / {p.label}
		  </span>
		))}
	  </div>
	);
  };
  
  