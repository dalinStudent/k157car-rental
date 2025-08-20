"use client";

import { useRouter } from "next/navigation";
import { fadeIn } from "@/configs/animate-css-classes";
import { CardItems } from "@/configs/how-it-work";
import { useLocale } from "next-intl";
import Image from "next/image";

export const CardSection = () => {
  const router = useRouter();
  const locale = useLocale() as "en" | "km" | "zh"

const items = CardItems[locale]
  return (
    <div className="mt-12 bg-gray-300 p-16 rounded-lg">
      <h2 className="text-orange-500 text-3xl font-bold text-center mb-12">
        Why Rent with Us
      </h2>
      <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
        Experience hassle-free car rentals with fast booking, a wide selection
        of vehicles, and secure payments. We make getting on the road easy and
        worry-free.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((card, index) => (
          <div
            key={index}
            onClick={() => router.push(card.path)}
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center 
                       transition-transform duration-300 ease-in-out 
                       hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <div
              className={`${fadeIn} w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-orange-100`}
            >
                <Image src={card.icon} alt={card.title} width={28} height={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">
              {card.title}
            </h3>
            <p className="text-gray-600 text-center">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
