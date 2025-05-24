import { BrandItems } from "@/configs/brand-items";
import { useLocale } from "next-intl";
import Image from "next/image";

export const Brands = () => {
  const locale = useLocale() as "en" | "km" | "zh";
  const items = BrandItems[locale];
  return (
    <div className="flex flex-row gap-3 justify-center mt-[100px]">
      {items.map((item, index) => (
        <div key={item.brand} className="flex flex-col items-center gap-8">
          <Image
            src={item.imgSrc}
            alt={item.brand}
            width={200}
            height={200}
            className="h-12 w-auto object-contain"
          />
          <span className="text-sm text-center">{item.brand}</span>
        </div>
      ))}
    </div>
  );
};
