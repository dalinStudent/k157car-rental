import Image from "next/image";
import { Car } from "@/types/car.type";
import { DiscountBadge } from "./DiscountBadge";

type Props = {
  item: Car;
  onClick: () => void;
};

export const CarGridItem = (props: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#F5F5F5]">
        <Image
          src={props.item.imageUrl}
          alt={props.item.name}
          fill
          className="object-cover"
        />

        <button
          type="button"
          className="absolute bottom-4 right-4 w-[32px] aspect-square bg-[#9AA0A880] rounded-full grid place-items-center cursor-pointer hover:bg-[#9AA0A8] transition-all duration-200"
          onClick={() => props.onClick()}
        >
          <Image src="/svg/add.svg" alt="add" width={18} height={18} />
        </button>

        {props.item.discountAmount && props.item.discountType && (
          <DiscountBadge
            amount={props.item.discountAmount}
            type={props.item.discountType}
          />
        )}
      </div>
    </div>
  );
};
