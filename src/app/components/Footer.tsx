import Image from "next/image";
import { BtnScrollToTop } from "./BtnScrollToTop";
import { SocialItems } from "@/configs/social-items";
import { fadeIn } from "@/configs/animate-css-classes";
import { PoweredBy } from "./PoweredBy";
import { useLocale } from "next-intl";
import { NavbarItems } from "@/configs/navbar-items";

export const Footer = () => {
  const locale = useLocale() as "en" | "km" | "zh"
  const items = NavbarItems[locale];

  return (
    <footer className="w-full bg-gray-100 rounded-t-xl mt-[150px] px-4 py-8">
      <div className="flex flex-col items-center gap-4 mb-6">
        <Image
          src="/images/car-logo.png"
          alt="logo"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className="mt-4 flex flex-wrap justify-center gap-4 sm:gap-6">
          {SocialItems.map((item, index) => (
            <a
              key={item.name}
              className={`${fadeIn} flex size-9 items-center justify-center rounded-full bg-black/60 transition-colors btn-hover-gradient`}
              data-wow-delay={`${index * 0.1}s`}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={item.icon} alt={item.name} width={24} height={24} />
            </a>
          ))}
        </div>
      </div>

      <hr className="border-gray-300 mb-6 w-full" />

      <div className="mx-auto w-full max-w-7xl px-4">
        <nav className="mb-6 flex flex-wrap justify-center gap-4 text-sm text-gray-700 sm:justify-start sm:gap-6 md:text-base">
          {items.map((item) => (
            <a href={item.path} className="hover:underline">{item.name}</a>
          ))}
        </nav>

        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-8">
            <p className="text-center text-sm text-gray-500 sm:text-left sm:text-base">
              © 2025 hoemdalin@gmail.com
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-4">
              <PoweredBy />
              <BtnScrollToTop />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
