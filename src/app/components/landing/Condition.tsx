import { ConditionItems } from "@/configs/condition-items";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { PopoverCustom } from "../Popover";
import { CaretUpOutlined } from "@ant-design/icons";

interface ConditionProps {
  value: string;
  onChange: (value: string) => void;
}

export const Condition = ({ value, onChange }: ConditionProps) => {
  const t = useTranslations("landing");
  const locale = useLocale() as "en" | "km" | "zh";
  const items = ConditionItems[locale];
  const [open, setOpen] = useState(false);

  const content = (
    <div className="flex flex-col">
      {items.map((item, index) => (
        <div
          key={item.value}
          className="cursor-pointer p-2 hover:bg-gray-100 rounded"
          onClick={() => {
            onChange(item.lable);
            setOpen(false);
          }}
        >
            <span className="text-black">{item.lable}</span>
        </div>
      ))}
    </div>
  );

  return (
    <PopoverCustom
        trigger="click"
        open={open}
        onOpenChange={setOpen}
        content={content}
        placement="bottomLeft"
        arrow={false}
    >
              <div className="flex items-center cursor-pointer gap-1">
        <CaretUpOutlined className="icons" />
        <span className="hidden sm:inline text-sm text-gray-600 whitespace-nowrap flex-shrink-0">
          {value ? `${value.replace("-", " ")}` : t("condition")}
        </span>
      </div>
    </PopoverCustom>
  )
};
