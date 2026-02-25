"use client";

import { NavbarActionItem } from "@/configs/navbar-btn-items";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  showSearch: boolean;
  favoriteCount: number;
  onFavoriteClick?: () => void;
  setFavoriteCount: React.Dispatch<React.SetStateAction<number>>;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const NavbarActionBtn = ({
  showSearch,
  favoriteCount,
  setFavoriteCount,
  setShowSearch,
  setSearchQuery,
  onFavoriteClick,
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
     if (onFavoriteClick) onFavoriteClick();
     const stored = JSON.parse(localStorage.getItem("add-to-favorites") || "[]");
     setFavoriteCount(stored.length);
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
          {item.action === "favorite" && favoriteCount > 0 && (
            <span className="absolute -top-2 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {favoriteCount}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};
