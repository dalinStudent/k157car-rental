export interface NavbarAction {
  iconSrc: string;
  name: string;
  action: "search" | "favorite" | "cart";
}

export const NavbarActionItem: Record<"en" | "km" | "zh", NavbarAction[]> = {
  en: [
    {
      iconSrc: "/svg/icons/search.svg",
      name: "Search",
      action: "search",
    },
    {
      iconSrc: "/svg/icons/favorite.svg",
      name: "Favorite",
      action: "favorite",
    },
    {
      iconSrc: "/svg/icons/cart.svg",
      name: "Cart",
      action: "cart",
    },
  ],
  km: [
    {
      iconSrc: "/svg/icons/search.svg",
      name: "Search",
      action: "search",
    },
    {
      iconSrc: "/svg/icons/favorite.svg",
      name: "Favorite",
      action: "favorite",
    },
    {
      iconSrc: "/svg/icons/cart.svg",
      name: "Cart",
      action: "cart",
    },
  ],
  zh: [
    {
      iconSrc: "/svg/icons/search.svg",
      name: "Search",
      action: "search",
    },
    {
      iconSrc: "/svg/icons/favorite.svg",
      name: "Favorite",
      action: "favorite",
    },
    {
      iconSrc: "/svg/icons/cart.svg",
      name: "Cart",
      action: "cart",
    },
  ],
};
