"use client";

import { fadeIn } from "@/configs/animate-css-classes";
import Image from "next/image";
import LottieService from "./LottieService";

const featuresLeft = [
  {
    icon: "/svg/wide-fleet.svg",
    title: "Wide Fleet",
    description: "Compact to luxury, we have it all.",
  },
  {
    icon: "/svg/setting.svg",
    title: "Reliable Service",
    description: "Well-maintained and safe vehicles.",
  },
];

const featuresRight = [
  {
    icon: "/svg/call.svg",
    title: "24/7 Support",
    description: "We’re here any time you need us.",
  },
  {
    icon: "/svg/setting.svg",
    title: "Trusted Maintenance",
    description: "Our vehicles go through regular service checks.",
  },
];

export const WhyUs = () => {
  return (
    <div className="w-full px-4 pt-14 flex flex-col items-center">
      <div className="max-w-xl text-center mb-12">
        <h1
          className={`${fadeIn} font-bold text-[32px] sm:text-[40px] text-orange-500`}
        >
          Why Choose Us
        </h1>
        <p className="text-white-700 mt-2">
          We offer hassle-free booking, 24/7 customer support, and
          well-maintained vehicles for a smooth and enjoyable rental experience.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl">
        {/* Left features */}
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
      </div>
    </div>
  );
};
