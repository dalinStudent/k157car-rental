import Image from "next/image";
import { Car } from "@/types/car.type";
import { DiscountBadge } from "@/app/components/cars/DiscountBadge";
import { DisplayAmount } from "@/app/components/cars/DisplayAmount";
import { CarStatus } from "@/common/enums/car-status.enum";
import { useRouter } from "@/libs/i18nNavigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { appMessage } from "@/utils/messageBox.util";

type Props = {
  item: Car;
  onClick: () => void;
  locale: string;
};

export const CarListItem = (props: Props) => {
  const router = useRouter();
  const t = useTranslations("booking");
  const [showButton, setShowButton] = useState<boolean>(false);
  const [favoriteCount, setFavoriteCount] = useState<number>(0);
  const [addToCart, setaddToCart] = useState<number>(0);

  const addToFavorite = (carId: number | string) => {
    let favorites: string[] = JSON.parse(
      localStorage.getItem("add-to-favorites") || "[]"
    );
    const carIdStr = carId.toString();
    if (!favorites.includes(carIdStr)) {
      favorites.push(carIdStr);
      localStorage.setItem("add-to-favorites", JSON.stringify(favorites));
      setFavoriteCount(favorites.length);
      appMessage.success("Saved to favorites");
    } else {
      appMessage.warning("Already in favorites");
    }
  };

  useEffect(() => {
    const stored: string[] = JSON.parse(
      localStorage.getItem("add-to-favorites") || "[]"
    );
    setFavoriteCount(stored.length);
  }, []);

  const goToDetailPage = () => {
    if (isAvailable) {
      router.push(`/cars/${props.item.id}`);
    } else {
      addToFavorite(props.item.id);
    }
  };

  const isAvailable = props.item.status === CarStatus.Available;
  return (
    <div className="w-full rounded-2xl border border-[#F5F5F5] overflow-hidden">
      <div
        className="relative w-full aspect-video group"
        onClick={() => setShowButton((prev) => !prev)}
      >
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

        {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" > */}
        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 
            ${
              showButton ? "opacity-100 pointer-events-auto" : "opacity-0"
            } group-hover:opacity-100 group-hover:pointer-events-auto`}
        >
          <button className="cta" onClick={goToDetailPage}>
            <span className="hover-underline-animation">
              {isAvailable ? t("button.book") : t("button.favorite")}
            </span>
            <svg
              id="arrow-horizontal"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="10"
              viewBox="0 0 46 16"
              fill="white"
            >
              <path
                id="Path_10"
                data-name="Path 10"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                transform="translate(30)"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="px-4 pt-3 text-[#0D1117] text-xl font-bold">
        {props.item.name}
      </div>

      <div className="px-4 py-3 flex items-center justify-between flex-wrap gap-2">
        <DisplayAmount size="xl" item={props.item} />
      </div>
    </div>
  );
};
