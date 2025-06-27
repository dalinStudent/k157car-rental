"use client";

import { Cars } from "@/data/Cars";
import { BookingData, Car } from "@/types/car.type";
import { calculatePrice } from "@/utils/booking.util";
import { use, useState } from "react";
import Image from "next/image";
import { CarSpecItems, includedSpecItems } from "@/configs/social-items";
import { useLocale, useTranslations } from "next-intl";
import UserForm from "@/app/components/Form";
import { fadeIn } from "@/configs/animate-css-classes";

const BookingPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const t = useTranslations("booking");
  const locale = useLocale() as "en" | "km" | "zh";
  const items = CarSpecItems[locale];
  const includeSpec = includedSpecItems[locale];
  const { id } = use(params);
  const carId = Number(id);
  const car: Car | undefined = Cars.find((c) => c.id === carId);
  if (!car) {
    return <div>Car not found</div>;
  }

  const [booking, setBooking] = useState<BookingData>({
    startDate: "",
    endDate: "",
  });
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [error, setError] = useState<string>("");

  const onDateChange = (field: "startDate" | "endDate", value: string) => {
    const newBooking = { ...booking, [field]: value };
    setBooking(newBooking);
    const { price, error } = calculatePrice(
      car,
      newBooking.startDate,
      newBooking.endDate
    );
    setTotalPrice(price);
    setError(error);
  };

  const onBook = () => {
    if (!booking.startDate || !booking.endDate) {
      setError("Please select start and end date.");
      return;
    }
    if (totalPrice <= 0) return;
    alert(
      `Booked from ${booking.startDate} to ${
        booking.endDate
      } for $${totalPrice.toFixed(2)}`
    );
    // Here add to cart or API call logic
  };

  const availabilityStart = car.availabilityStart || "24 June, 2025 10:00AM";
  const availabilityEnd = car.availabilityEnd || "29 June, 2025 10:00AM";

  return (
    <><div className="max-w-6xl mx-auto grid grid-cols-1 px-4 sm:grid-cols-12 gap-6 py-14">
      <div className="sm:col-span-7 grid grid-cols-1 sm:grid-cols-2 border p-6 rounded-xl shadow bg-white/20 backdrop-blur-sm">
        <div className="">
          <h2 className="text-xl font-bold mb-4 text-black">{car.name}</h2>
          <div className="grid grid-cols-1 gap-2">
            {car.galleries.map((img, index) => (
              <Image
                key={img.id}
                src={img.imageUrl}
                alt={`Gallery image ${index + 1}`}
                width={200}
                height={150}
                className="rounded-lg object-cover" />
            ))}
          </div>
        </div>

        <div className="flex flex-col mt-10">
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            {items.map((item, index) => (
              <div key={index} className={`${fadeIn} flex items-center gap-2`}>
                <Image src={item.icon} alt={item.name} width={24} height={24} />
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <p className="text-xl font-bold mb-4 text-black">
              {t("include_price")}
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              {includeSpec?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="sm:col-span-5 space-y-6">
        <div className="border p-4 rounded-xl shadow bg-white/20 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-black mb-2">
            {t("availability")}
          </h3>
          <div className="flex items-center gap-2 rounded-xl">
            <div className="flex flex-col items-start w-1/3">
              <div className="flex items-center gap-2 mb-1">
                <Image
                  src="/svg/icons/pickup.svg"
                  alt="pickup"
                  width={24}
                  height={24} />
                <p className="text-sm font-semibold text-gray-700">
                  {t("pickup")}
                </p>
              </div>
              <div className="ml-2 sm:ml-8">
                <p className="text-sm text-gray-600">{availabilityStart}</p>
                <p className="text-sm text-gray-600">Phnom Penh</p>
              </div>
            </div>

            <div className="w-[2px] bg-orange-500 h-20 mx-4"></div>

            <div className="flex flex-col items-start w-1/3">
              <div className="flex items-center gap-2 mb-1">
                <Image
                  src="/svg/icons/dropoff.svg"
                  alt="pickup"
                  width={24}
                  height={24} />
                <p className="text-sm font-semibold text-gray-700">
                  {t("dropoff")}
                </p>
              </div>
              <div className="ml-2 sm:ml-8">
                <p className="text-sm text-gray-600">{availabilityEnd}</p>
                <p className="text-sm text-gray-600">Phnom Penh</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border p-4 rounded-xl shadow bg-white/20 backdrop-blur-sm space-y-3">
          <h3 className="text-lg font-bold text-black">{t("summary_price")}</h3>
          <p className="text-gray-700">
            {t("daily_rate")}: ${car.pricePerDay}
          </p>
          <p className="text-gray-700">
            {t("weekly_rate")}: ${car.pricePerWeek}
          </p>
          <p className="text-gray-700">
            {t("monthly_rate")}: ${car.pricePerMonth}
          </p>
          {totalPrice > 0 && (
            <p className="text-black font-semibold">
              Total: ${totalPrice.toFixed(2)}
            </p>
          )}
            <p className="inline-block p-2 font-semibold bg-green-100 text-green-800 rounded-full">
              4.8/5
            </p>
          <div className="flex items-center gap-2">
            <button className="buttons w-full text-sm">
              <span className="hidden sm:block">{t("button.book")}</span>
              <Image src="/svg/icons/wallet.svg" alt="booked icon" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="px-4">
    <UserForm />

    </div>
    </>
  );
};

export default BookingPage;
