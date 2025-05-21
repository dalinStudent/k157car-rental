export interface SubMenuItem {
  name: string;
  href: string;
  icon?: string;
}

export interface NavbarItem {
  name: string;
  href?: string;
  externalHref?: string;
  subItems?: SubMenuItem[];
}

export const NavbarItems: Record<"en" | "km" | "zh", NavbarItem[]> = {
  en: [
    {
      name: "About Us",
      href: "/about-us",
    },
    {
      name: "How it works",
      href: "/about-us",
    },
    {
      name: "Service",
      href: "/faqs",
    },
    {
      name: "FAQs",
      href: "/faqs",
    },
  ],
  km: [
    {
      name: "អំពីពួកយើង",
      href: "/about-us",
    },
    {
      name: "របៀបដែលវាដំណើរការ",
      href: "/about-us",
    },
    {
      name: "សេវាកម្ម",
      href: "/service",
    },
    {
      name: "FAQs",
      href: "/about-us",
    },
  ],
  zh: [
    {
      name: "关于我们",
      href: "/about-us",
    },
    {
      name: "工作原理",
      href: "/faqs",
    },
    {
      name: "我们的服务",
      href: "/about-us",
    },
    {
      name: "FAQs",
      href: "/about-us",
    },
  ],
};
