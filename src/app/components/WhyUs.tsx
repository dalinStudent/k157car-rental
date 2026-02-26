"use client";

import { fadeIn } from "@/configs/animate-css-classes";
import Image from "next/image";
import LottieService from "./lotties/LottieService";
import { useLocale, useTranslations } from "next-intl";

export const WhyUs = () => {
  const locale = useLocale() as "en" | "km" | "zh"
  const t = useTranslations("about_us")

  const featuresLeft = [
  {
    icon: "/svg/wide-fleet.svg",
    title: t('features_left.wide_fleet'),
    description: t('features_left.description_wide'),
  },
  {
    icon: "/svg/setting.svg",
    title: t('features_left.reliable_service'),
    description: t('features_left.description_service'),
  },
];

const featuresRight = [
  {
    icon: "/svg/call.svg",
    title: t('features_right.support'),
    description: t('features_right.description_support'),
  },
  {
    icon: "/svg/setting.svg",
    title: t('features_right.trust_maintenance'),
    description: t('features_right.description_trust'),
  },
];

  return (
    <div className="w-full px-4 pt-14 flex flex-col items-center">
      <div className="max-w-xl text-center mb-12">
        <h1
          className={`${fadeIn} font-bold text-[32px] sm:text-[40px] text-orange-500`}
        >
          {t('why_choose_us')}
        </h1>
        <p className="text-white-700 mt-2">
          {t('description')}
        </p>
      </div>

      {/* <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl">

        <div className="flex flex-col gap-8 max-w-xs">
          {featuresLeft.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <div
                  className={`${fadeIn} flex items-center justify-center rounded-full bg-[#ffff] transition-colors w-[40px] h-[40px]`}
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={28}
                    height={28}
                  />
                </div>
                <p className="font-semibold text-lg text-black">
                  {feature.title}
                </p>
              </div>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="w-full max-w-sm">
          <LottieService />
        </div>
        
        <div className="flex flex-col gap-8 max-w-sm">
          {featuresRight.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <div
                  className={`${fadeIn} flex items-center justify-center rounded-full bg-[#ffff] transition-colors w-[40px] h-[40px]`}
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={28}
                    height={28}
                  />
                </div>

                <p className="font-semibold text-lg text-black">
                  {feature.title}
                </p>
              </div>
              <p className="text-gray-600 text-normal">{feature.description}</p>
            </div>
          ))}
        </div>
      </div> */}

<div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-10 w-full max-w-6xl">
  {/* Left features */}
  <div className="flex flex-col gap-6 w-full md:w-1/4 text-center md:text-left">
    {featuresLeft.map((feature, index) => (
      <div key={index} className="flex flex-col items-center md:items-start gap-2">
        <div className="flex items-center justify-center rounded-full bg-white w-10 h-10">
          <Image src={feature.icon} alt={feature.title} width={28} height={28} />
        </div>
        <p className="font-semibold text-lg text-black">{feature.title}</p>
        <p className="text-gray-600 text-sm">{feature.description}</p>
      </div>
    ))}
  </div>

  {/* Lottie */}
  <div className="w-full md:w-1/2 max-w-md">
    <LottieService />
  </div>

  {/* Right features */}
  <div className="flex flex-col gap-6 w-full md:w-1/4 text-center md:text-left">
    {featuresRight.map((feature, index) => (
      <div key={index} className="flex flex-col items-center md:items-start gap-2">
        <div className="flex items-center justify-center rounded-full bg-white w-10 h-10">
          <Image src={feature.icon} alt={feature.title} width={28} height={28} />
        </div>
        <p className="font-semibold text-lg text-black">{feature.title}</p>
        <p className="text-gray-600 text-sm">{feature.description}</p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};
