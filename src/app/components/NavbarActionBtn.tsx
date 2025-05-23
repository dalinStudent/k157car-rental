import { NavbarActionItem } from "@/configs/navbar-btn-items";
import { useLocale } from "next-intl";
import Image from "next/image";

interface Props {
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const NavbarActionBtn = ({
  showSearch,
  setShowSearch,
  setSearchQuery,
}: Props) => {
  const locale = useLocale() as "en" | "km" | "zh";
  const items = NavbarActionItem[locale];

  const actionHandlers: Record<
    "search" | "favorite" | "cart",
    (item: (typeof items)[0]) => void
  > = {
    search: () => {
      setShowSearch((prev) => !prev);
      setSearchQuery("");
    },
    favorite: () => {
      alert("Favorite action triggered!");
    },
    cart: () => {
      alert("Cart action triggered!");
      //   router.push("/cart");
    },
  };

  const handleAction = (item: (typeof items)[0]) => {
    const handler = actionHandlers[item.action as keyof typeof actionHandlers];
    if (handler) handler(item);
  };

  return (
    <div className="flex gap-3 justify-end">
      {items.map((item) => (
        <div
          key={item.name}
          className="rounded-full size-[25px] bg-white/30 backdrop-blur flex items-center justify-center"
        >
          <div className="relative size-[16px] cursor-pointer">
            <Image
              src={item.iconSrc}
              alt={item.name}
              fill
              onClick={() => handleAction(item)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
