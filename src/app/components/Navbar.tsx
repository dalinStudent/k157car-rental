"use client";

import { useLocale } from "next-intl";
import { NavbarItems } from "../../configs/navbar-items";
import { NavbarActionBtn } from "./NavbarActionBtn";
import { useEffect, useState } from "react";
import { SearchInput } from "./SearchInput";
import { fadeIn, speedSlow } from "@/configs/animate-css-classes";
import { Localization } from "./Localization";
import { usePathname, useRouter } from "@/libs/i18nNavigation";
import clsx from "clsx";
import { Hambuger } from "@/app/components/Hambuger";
import { FavoriteModal } from "./FavoriteModal";

export const Navbar = () => {
  const locale = useLocale() as "en" | "km" | "zh";
  const items = NavbarItems[locale];
  const router = useRouter();
  const pathname = usePathname();
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const [visibleItems, setVisibleItems] = useState<number>(0);
  const [favoriteCount, setFavoriteCount] = useState<number>(0);
  const [showFavoritesModal, setShowFavoritesModal] = useState(false);

  const openFavorites = () => setShowFavoritesModal(true);
  const closeFavorites = () => setShowFavoritesModal(false);

  useEffect(() => {
    if (isMenuOpened) {
      let index = 0;
      const interval = setInterval(() => {
        index++;
        setVisibleItems(index);
        if (index >= items.length) clearInterval(interval);
      }, 100);
    } else {
      setVisibleItems(0);
    }
  }, [isMenuOpened, items.length]);

  useEffect(() => {
    setIsMenuOpened(false);
  }, [pathname]);

useEffect(() => {
  const stored = JSON.parse(localStorage.getItem("add-to-favorites") || "[]");
  setFavoriteCount(stored.length);
}, []);

  return (
    <div className="navbar relative z-50">
      <div
        className={clsx(
          "mx-auto flex items-center justify-between bg-white/10 backdrop-blur-xl rounded-full lg:p-4 px-2 transition-all duration-500 ease-in-out",
          showSearch ? "lg:w-[1000px]" : "lg:w-[700px]",
          "w-full max-w-[95%]"
        )}
      >
        <div className="hidden sm:flex items-center gap-6 overflow-hidden">
          <div className="flex gap-2 whitespace-nowrap">
            <div
              onClick={() => router.push("/")}
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition mb-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                color="text-orange-500"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>

            {items.map((item) => {
              const isActive = pathname === item.path;
              return (
                <button
                  key={item.name}
                  onClick={() => router.push(item.path)}
                  className={`p-2 sm:p-2 rounded-full transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "text-orange-500 font-semibold scale-110"
                      : "text-white hover:scale-110"
                  }`}
                >
                  <p className="text-sm sm:text-[18px]">{item.name}</p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="sm:hidden">
          <button onClick={() => setIsMenuOpened(!isMenuOpened)}>
            <Hambuger
              toggled={isMenuOpened}
              onToggle={() => setIsMenuOpened((prev) => !prev)}
            />
          </button>
        </div>
        {isMenuOpened && (
          <div className="sm:hidden absolute top-full mt-2 w-[90%] max-w-xs bg-white text-black rounded-xl shadow-lg z-50 overflow-hidden">
            <div className="flex flex-col p-4 gap-2">
              <button
                onClick={() => {
                  router.push("/");
                  setIsMenuOpened(false);
                }}
                className="text-left px-4 py-2 rounded hover:bg-gray-100/80 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  color="text-orange-500"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </button>
              {items.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => {
                    router.push(item.path);
                    setIsMenuOpened(false);
                  }}
                  className={`text-left px-4 py-2 rounded hover:bg-gray-100/80 cursor-pointer transform transition-all duration-300 ease-in-out
            ${
              index < visibleItems
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="flex items-center gap-4">
          {showSearch && (
            <div
              className={`${fadeIn} w-40 lg:w-56 transition-opacity duration-500 ease-in-out`}
              data-wow-delay={speedSlow}
            >
              <SearchInput
                value={searchQuery}
                onChange={(val) => setSearchQuery(val)}
              />
            </div>
          )}
          <NavbarActionBtn
            showSearch={showSearch}
            setShowSearch={setShowSearch}
            setSearchQuery={setSearchQuery}
            favoriteCount={favoriteCount}
            onFavoriteClick={openFavorites}
            setFavoriteCount={setFavoriteCount}
          />
          <FavoriteModal
            open={showFavoritesModal}
            onClose={() => setShowFavoritesModal(false)}
          />
          <Localization />
        </div>
      </div>
    </div>
  );
};
