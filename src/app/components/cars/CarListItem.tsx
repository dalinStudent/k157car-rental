import Image from "next/image";
import { Car } from "@/types/car.type";
import { DiscountBadge } from "./DiscountBadge";
import { DisplayAmount } from "./DisplayAmount";

type Props = {
  item: Car;
  onClick: () => void;
};

export const CarListItem = (props: Props) => {
  return (
    <div className="flex gap-3 rounded-2xl border border-[#F5F5F5] p-1">
      <div className="relative w-[226px] aspect-video rounded-xl overflow-hidden">
        <Image
          src={props.item.imageUrl}
          alt={props.item.name}
          fill
          className="object-cover"
        />
        {props.item.discountAmount && props.item.discountType && (
          <DiscountBadge
            amount={props.item.discountAmount}
            type={props.item.discountType}
          />
        )}
      </div>
      <div className="flex-1 flex h-full flex-col justify-between items-end p-4">
				<div className="flex flex-col gap-1 w-full">
					<DisplayAmount size="xl" item={props.item} />
					<p className="text-[#68717A]">
						{props.item.name}
					</p>
				</div>

				<button
					type="button"
					className="w-[32px] aspect-square bg-[#C0C7CD] rounded-full grid place-items-center cursor-pointer hover:bg-[#9AA0A8] transition-all duration-200"
					onClick={() => props.onClick()}
				>
					<Image src="/svg/add.svg" alt="add" width={18} height={18} />
				</button>
			</div>
    </div>
  );
};
