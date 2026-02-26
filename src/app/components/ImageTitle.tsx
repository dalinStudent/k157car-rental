import { TitleAboutUs } from "@/configs/about-us-items";
import { fadeIn, speedSlow } from "@/configs/animate-css-classes";
import { useLocale } from "next-intl";
import Image from "next/image";

const ImageTitle = () => {
  const locale = useLocale() as "en" | "km" | "zh";
  const items = TitleAboutUs[locale];
  return (
    <div className="relative w-full h-[450px] -mt-25 z-0">
      <Image
        src="/images/about_banner.jpg"
        alt="car-rental"
        fill
        className="object-cover object-center filter blur-[2px]"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 mt-5">
        <h1
          className={`${fadeIn} text-white text-5xl font-extrabold mb-4 drop-shadow-lg`}
          data-wow-delay={speedSlow}
        >
          {items.title}
        </h1>
        <p className={`${fadeIn} text-white text-lg max-w-xl drop-shadow-md`}>
          {items.description}
        </p>
      </div>
    </div>
  );
};

export default ImageTitle;
