import Image from "next/image";
import { BtnScrollToTop } from "./BtnScrollToTop";
import { SocialItems } from "@/configs/social-items";
import { fadeIn } from "@/configs/animate-css-classes";
import { PoweredBy } from "./PoweredBy";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 w-full rounded-t-xl py-8 px-4 mt-[150px]">
      <div className="flex flex-col items-center gap-4 mb-6">
        <Image
          src="/images/logo.jpg"
          alt="logo"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className="flex gap-6 mt-5">
          {SocialItems.map((item, index) => (
            <a
              key={item.name}
              className={`${fadeIn} flex size-9 items-center justify-center rounded-full bg-[#000000]/60 transition-colors hover:bg-[#CD202A]`}
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

      <hr className="border-gray-300 mb-6" />

      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <nav className="flex gap-6 text-gray-700 text-sm md:text-base">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/aboutus" className="hover:underline">
            About
          </a>
          <a href="/service" className="hover:underline">
            Services
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </nav>

        {/* <div className="flex items-center gap-4 text-gray-500 text-sm">
          <span>© 2025 hoemdalin@gmail.com</span>
        </div> */}
        <div className="w-full border-t border-white/10">
          <div className="m-auto flex max-w-[1194px] flex-col items-center justify-between gap-6 px-4 py-6 sm:flex-row sm:gap-8">
            <p className="text-center text-base font-normal text-gray-500 sm:text-left">
              © 2025 hoemdalin@gmail.com
            </p>

            <div className="flex flex-col items-center justify-end gap-6 sm:flex-row sm:gap-4">
              <PoweredBy />
              <BtnScrollToTop />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
