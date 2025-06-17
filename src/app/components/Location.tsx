"use client";

import React, { useState } from "react";
import { AimOutlined } from "@ant-design/icons";
import { PopoverCustom } from "./Popover";
import { LocationItems } from "@/configs/location-item";
import { useLocale, useTranslations } from "next-intl";

interface LocationProps {
  value: string;
  onChange: (value: string) => void;
}

export const Location = ({ value, onChange }: LocationProps) => {
  const t = useTranslations("landing");
  const locale = useLocale() as "en" | "km" | "zh";
  const items = LocationItems[locale];
  const [open, setOpen] = useState(false);

  const content = (
    <div className="flex flex-col">
      {items.map((item) => (
        <div
          key={item.code}
          className="cursor-pointer p-2 hover:bg-gray-100 rounded"
          onClick={() => {
            onChange(item.label);
            setOpen(false);
          }}
        >
          <span className="text-black">{item.label}</span>
        </div>
      ))}
    </div>
  );

  return (
    <PopoverCustom
      open={open}
      onOpenChange={setOpen}
      trigger="click"
      placement="bottomLeft"
      content={content}
      arrow={false}
    >
      <div className="flex items-center cursor-pointer gap-1">
        <AimOutlined className="icons" />
        <span className="hidden sm:inline text-sm text-gray-600 whitespace-nowrap flex-shrink-0">
          {value ? `${value.replace("-", " ")}` : t("location")}
        </span>
      </div>
    </PopoverCustom>
  );
};
