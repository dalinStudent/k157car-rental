"use client";

import { useLocale } from "next-intl";
import { NavbarItems } from "../../configs/navbar-items";
import { NavbarActionBtn } from "./NavbarActionBtn";
import { useState } from "react";
import { SearchInput } from "./SearchInput";
import { fadeIn, speedFast } from "@/configs/animate-css-classes";

export const Navbar = () => {
  const locale = useLocale() as "en" | "km" | "zh";
  const items = NavbarItems[locale];
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div className="sticky z-999 top-0 left-0 border-b-0 border-[rgba(0,0,0,0.05) bg-slate-300 backdrop-blur-lg p-4">
      <div className="flex max-w-[1194px] items-center justify-between">
        <div className="flex items-center justify-between gap-6">
          <div className="flex gap-4 whitespace-nowrap">
            {items.map((items) => (
              <p className="text-black" key={items.name}>
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
        </div>
      </div>
    </div>
  );
};
