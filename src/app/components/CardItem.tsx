import { useLocale } from "next-intl";
import { ValueAboutUs } from "@/configs/about-us-items";
import Image from "next/image";

export const CardInfo = () => {
  const locale = useLocale() as "en" | "km" | "zh";
  const values = ValueAboutUs[locale];

  return (
    <div className="flex flex-row justify-center gap-2 max-w-7xl mx-auto p-6">
      {values.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded shadow overflow-hidden w-1/3 h-60"
        >
          {index === 1 ? (
            <div className="p-4 h-full flex flex-col justify-center">
              <h2 className="text-xl font-semibold mb-2 text-black">{item.title}</h2>
              <p className="text-black">{item.description}</p>
            </div>
          ) : (
            <Image
              src={item.imageUrl || "/images/default.jpg"}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      ))}
    </div>
  );
};
