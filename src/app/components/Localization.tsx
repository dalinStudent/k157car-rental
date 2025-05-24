import { useLocale } from "next-intl";
import Image from "next/image";
import { PopoverCustom } from "./Popover";
import { LanguageItems } from "@/configs/lang-item";
import { usePathname, useRouter } from "@/libs/i18nNavigation";

export const Localization = () => {
  const locale = useLocale() as "en" | "km" | "zh";
  const router = useRouter();
  const pathname = usePathname();

  const content = (
    <div className="">
      {LanguageItems.map((lang, index) => (
        <button
          key={lang.code}
          type="button"
          className={`
                ${locale === lang.code ? "button-item" : ""}
                ${
                  locale !== lang.code
                    ? "hover:navbar-gradient-text hover:bg-[rgba(52,73,94,0.4)]"
                    : ""
                } 
                flex w-full items-center space-x-3 rounded-xl p-4 text-black
              `}
          onClick={() => onChangeLang(lang.code)}
        >
          <Image
            className="rounded-full border border-[#EFF0F1]"
            loading="lazy"
            src={lang.flagSrc}
            alt={`flag-${lang.code}`}
            width={28}
            height={28}
          />
          <span>{lang.label}</span>
        </button>
      ))}
    </div>
  );

  const onChangeLang = (langCode: string) => {
    router.replace({ pathname }, { locale: langCode });
  };

  return (
    <div className="px-1">
      <PopoverCustom
        trigger="click"
        arrow={false}
        placement="bottomRight"
        content={content}
      >
        <Image
          src={`/svg/flags/${locale}.svg`}
          alt="flag-lang"
          width={26}
          height={26}
          className="cursor-pointer rounded-full border border-[#CD202A]"
        />
      </PopoverCustom>
    </div>
  );
};
