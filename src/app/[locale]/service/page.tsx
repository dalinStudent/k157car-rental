import { fadeIn } from "@/configs/animate-css-classes";
import { ServiceFeature, ServiceItems } from "@/configs/service-items";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

const Service = async () => {
  const locale = await getLocale() as "en" | "km" | "zh";
  const features = ServiceFeature[locale];
  const items = ServiceItems[locale];
  const t = await getTranslations({ locale, namespace: "service" });

  return (
    <div className="bg-white/20 backdrop-blur-md p-6 space-y-8 py-10 mt-14">
      <div className={`space-y-2 items-center text-center`}>
        <h1 className={`${fadeIn} text-[30px] font-bold text-[#2a2f3a]`}>
          {t("title.first")}
        </h1>
        <p className={`${fadeIn} text-gray-600`}>{t("sub_title.first")}</p>
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
      <div className="bg-white/50 rounded-xl p-6 space-y-4 text-center">
        <h2 className={`${fadeIn} text-[26px] font-semibold text-[#2a2f3a]`}>
          {t("title.second")}
        </h2>
        <p className="text-gray-600">{t("sub_title.second")}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 py-5 px-7 bg-gray-100 rounded-xl"
            >
              <div
                className={`${fadeIn} flex items-center justify-center rounded-full bg-[#9ba5b4] transition-colors w-[35px] h-[35px]`}
              >
                <Image
                  alt="icon"
                  src={item.iconSrc}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>

              <h5 className={`text-lg font-semibold text-[#2a2f3a]`}>
                {item.title}
              </h5>
              <p className={`text-sm text-gray-600`}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto py-8 px-4">
        <div className="rounded-xl p-6 space-y-4">
          <h3 className="text-[26px] font-semibold text-[#2a2f3a] text-center">
            {t("title.third")}
          </h3>
          <p className="text-gray-600 text-center">{t("sub_title.third")}</p>

          <div className="grid grid-cols-2 gap-6">
            {items.map((item, index) => (
              <div key={index} className="p-4 space-y-2 text-center">
                <Image
                  src={item.iconSrc}
                  alt="image-service"
                  width={600}
                  height={400}
                  className="object-contain mx-auto"
                />
                <h4 className="text-[20px] font-semibold text-[#2a2f3a]">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
