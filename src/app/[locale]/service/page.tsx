import { ServiceFeature, ServiceItems } from "@/configs/service-items";
import { useLocale } from "next-intl";
import Image from "next/image";

const Service = () => {
  const locale = useLocale() as "en" | "km" | "zh";
  const features = ServiceFeature[locale];
  const items = ServiceItems[locale];

  return (
    <div className="bg-white p-6 space-y-8 py-10 mt-14">
      <div className="space-y-2 items-center text-center">
        <h1 className="text-[30px] font-bold text-gray-800">
          Wide Range of Vehicles
        </h1>
        <p className="text-gray-600">
          From compact cars to luxury SUVs, choose the perfect ride for your
          journey.
        </p>
      </div>

      <div className="rounded-xl overflow-hidden">
        <div className="relative h-96 w-full">
          <Image
            alt="car-service"
            src="/images/car-service.jpeg"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </div>
      <div className="bg-gray-50 rounded-xl p-6 space-y-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800">
          Flexible Rental Plans Feature
        </h2>
        <p className="text-gray-600">
          Rent by the hour, day, week, or month — whatever suits your schedule.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 py-5 px-7 bg-gray-100 rounded-xl"
            >
              <div className="flex items-center justify-center rounded-full bg-blue-100 transition-colors w-[35px] h-[35px]">
                <Image
                  alt="icon"
                  src={item.iconSrc}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>

              <h5 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h5>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl p-6 space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">
          How Our Service Works
        </h3>
        <p className="text-gray-600">
          We’re here anytime you need help — before, during, or after your
          rental.
        </p>

        <div className="grid grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg shadow-sm space-y-2"
            >
              <Image
                src={item.iconSrc}
                alt="image-service"
                width={600}
                height={400}
                className="object-contain"
              />
              <h4 className="text-lg font-medium text-gray-800">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
