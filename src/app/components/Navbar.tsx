"use client";

import { useLocale } from "next-intl";
import { NavbarItems } from "../../configs/navbar-items";
import { NavbarActionBtn } from "./NavbarActionBtn";
import { useEffect, useState } from "react";
import { SearchInput } from "./SearchInput";
import { fadeIn, speedFast } from "@/configs/animate-css-classes";
import { Localization } from "./Localization";
import Image from "next/image";
import { usePathname, useRouter } from "@/libs/i18nNavigation";
import { LanguageItems } from "@/configs/lang-item";

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
  })

  return (
    <div className="navbar">
      <div className="mx-auto flex w-[600px] items-center justify-between bg-white/10 backdrop-blur-xl rounded-full p-3">
        <div className="flex items-center gap-6">
          <div className="flex gap-4 whitespace-nowrap">
            {items.map((items) => (
              <p className="text-white" key={items.name}>
                {items.name}
              </p>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          {showSearch && (
            <div className={`${fadeIn}`} data-wow-delay={speedFast}>
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
    </div>
  );
};
