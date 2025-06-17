import Image from "next/image";
import { Car } from "@/types/car.type";
import { DiscountBadge } from "@/app/components/cars/DiscountBadge";
import { DisplayAmount } from "@/app/components/cars/DisplayAmount";
import { CarStatus } from "@/common/enums/car-status.enum";

type Props = {
  item: Car;
  onClick: () => void;
};

export const CarListItem = (props: Props) => {
  const isAvailable = props.item.status === CarStatus.Available;
  return (
    <div className="w-full rounded-2xl border border-[#F5F5F5] overflow-hidden">
      <div className="relative w-full aspect-video group">
        <div
          className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold ${
            isAvailable ? "bg-green-600" : "bg-red-600"
          } text-white`}
        >
          {isAvailable ? CarStatus.Available : CarStatus.Unavailable}
        </div>

        <Image
          src={props.item.imageUrl}
          alt={props.item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
        {props.item.discountAmount != null && props.item.discountType && (
          <div className="absolute top-3 right-3 z-20">
            <DiscountBadge
              amount={props.item.discountAmount}
              type={props.item.discountType}
            />
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white bg-opacity-90 rounded-lg px-4 py-2 shadow-md text-sm font-semibold text-gray-900 cursor-pointer">
            View Details
          </div>
        </div>
      </div>

      <div className="px-4 pt-3 text-[#0D1117] text-xl font-bold">
        {props.item.name}
      </div>

      <div className="px-4 py-3 flex items-center justify-between flex-wrap gap-2">
        <DisplayAmount size="xl" item={props.item} />
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
}
