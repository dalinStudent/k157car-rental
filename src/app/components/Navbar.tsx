"use client";

import { useLocale } from "next-intl";
import { NavbarItems } from "../../configs/navbar-items";
import { NavbarActionBtn } from "./NavbarActionBtn";
import { useEffect, useState } from "react";
import { SearchInput } from "./SearchInput";
import { fadeIn, fadeInUp, speedSlow } from "@/configs/animate-css-classes";
import { Localization } from "./Localization";
import { usePathname, useRouter } from "@/libs/i18nNavigation";
import clsx from "clsx";
import { Hambuger } from "@/app/components/Hambuger";

export const Navbar = () => {
  const locale = useLocale() as "en" | "km" | "zh";
  const items = NavbarItems[locale];
  const router = useRouter();
  const pathname = usePathname();
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  useEffect(() => {
    setIsMenuOpened(false);
  }, [pathname]);

  return (
    <div className="navbar relative z-50">
      <div
        className={clsx(
          "mx-auto flex items-center justify-between bg-white/10 backdrop-blur-xl rounded-full lg:p-2 px-2 transition-all duration-500 ease-in-out",
          showSearch ? "lg:w-[800px]" : "lg:w-[600px]",
          "w-full max-w-[95%]"
        )}
      >
        <div className="hidden sm:flex items-center gap-6 overflow-hidden">
          <div className="flex gap-2 whitespace-nowrap">
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
          />
          <Localization />
        </div>
      </div>

      {isMenuOpened && (
        <div className="sm:hidden absolute top-full mt-2 w-[90%] max-w-xs bg-white text-black rounded-xl shadow-lg z-50 bg-neutral-gray cursor-pointer">
          <div className="flex flex-col p-4 gap-2">
            {items.map((item, index) => (
              <button
                key={item.name}
                onClick={() => {
                  router.push(item.path);
                  setIsMenuOpened(false);
                }}
                className={`${fadeInUp} text-left px-4 py-2 rounded hover:bg-gray-100/80 cursor-pointer`}
                data-wow-delay={`${index * 0.1}s`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
