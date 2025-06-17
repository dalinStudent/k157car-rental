import { fadeIn } from "@/configs/animate-css-classes";
import { getTranslations } from "next-intl/server";
import { TypingAnimation } from "@/app/components/TypingAnimation";

export const IntroductionBlock = async () => {
  const t = await getTranslations("landing");
  return (
    <div className="text-center mt-5 sm:mt-[50px] mb-6">
      <h1
        className={`${fadeIn} flex justify-center items-center text-[24px] font-bold sm:text-[48px] mx-auto text-orange-500`}
      >
        <TypingAnimation />
        <span className="ml-1 mt-[-4px] h-[37px] w-[3px] animate-blink bg-[#CD202A] opacity-60"></span>
        <span className="ml-2 text-white">K157</span>
      </h1>
      <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-white">
        {t.rich("main_title", {
          highlight: (chunks) => (
            <span className="text-orange-500">{chunks}</span>
          ),
        })}
      </h1>
    </div>
  );
};
