import { useState } from "react";
import { PopoverCustom } from "./Popover";
import { SwapOutlined } from "@ant-design/icons";
import { useTranslations } from "next-intl";

interface PriceProps {
  value: string;
  onChange: (value: string) => void;
}
export const SortPrice = ({ value, onChange }: PriceProps) => {
  const t = useTranslations("landing");
  const [priceRange, setPriceRange] = useState<{
    min: number | null;
    max: number | null;
  }>({
    min: null,
    max: null,
  });
  const [open, setOpen] = useState(false);

  const { min, max } = priceRange;
  const isValid =
    min !== null && min >= 35 && (max === null || (max >= 35 && max >= min));

  const handleApply = () => {
    if (isValid) {
      const label = `${min ?? 0}-${max ?? "∞"}`;
      onChange(label);
      setOpen(false);
    }
  };

  const content = (
    <div className="flex flex-col gap-2">
      <input
        type="number"
        min={35}
        value={priceRange.min ?? ""}
        onChange={(e) =>
          setPriceRange((prev) => ({ ...prev, min: Number(e.target.value) }))
        }
        className="border border-gray-300 rounded px-2 py-1 text-sm"
        placeholder={`${t('minimum')} $`}
      />

      <label className="text-sm text-gray-700 mt-2">{t('max_price')}</label>
      <input
        type="number"
        min={35}
        value={priceRange.max ?? ""}
        onChange={(e) =>
          setPriceRange((prev) => ({ ...prev, max: Number(e.target.value) }))
        }
        className="border border-gray-300 rounded px-2 py-1 text-sm"
        placeholder={`${t('maximum')} $`}
      />
      <button
        className="mt-3 bg-blue-600 text-white rounded px-2 py-1 text-sm hover:bg-blue-700"
        onClick={handleApply}
        disabled={!isValid}
      >
        {t("button.apply")}
      </button>
    </div>
  );

  return (
    <PopoverCustom
      open={open}
      onOpenChange={setOpen}
      trigger="click"
      content={content}
    >
      <div className="flex items-center cursor-pointer gap-1">
        <SwapOutlined
          className="icons"
          style={{
            transform: "rotate(90deg)",
          }}
        />
        <span className="text-sm text-gray-600 whitespace-nowrap flex-shrink-0">
          {value ? `${value.replace("-", " to ")} $` : t("sort_price")}
        </span>
      </div>
    </PopoverCustom>
  );
};
