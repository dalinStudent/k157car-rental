import { fadeIn } from "@/configs/animate-css-classes";
import { ServiceFeature, ServiceItems } from "@/configs/service-items";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

const Service = async () => {
  const locale = (await getLocale()) as "en" | "km" | "zh";
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
      <div className="bg-white/50 rounded-xl p-4 space-y-4 text-center">
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

      <div className="mx-auto sm:px-4 py-8 max-w-6xl">
        <div className="bg-white/70 rounded-2xl p-4 sm:p-6 sm:p-10 shadow-md space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#2a2f3a] text-center">
            {t("title.third")}
          </h3>
          <p className="text-gray-600 text-center max-w-xl mx-auto">
            {t("sub_title.third")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg"
              >
                {/* Left side: text */}
                <div className="w-full md:w-1/2 p-6 text-center md:text-left">
                  <div className="flex justify-center md:justify-start">
                    <Image
                      src={item.iconSrc}
                      alt="icon"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[16px] font-semibold text-[#2a2f3a]">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>

                <div className="w-full sm:w-1/2 h-64 md:h-[180px]">
                  <Image
                    src={item.imageUrl ?? ''}
                    alt="image-service"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
