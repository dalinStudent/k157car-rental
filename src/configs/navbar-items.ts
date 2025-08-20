export interface SubMenuItem {
  name: string;
  href: string;
  icon?: string;
  path: string;
}

export interface NavbarItem {
  name: string;
  href?: string;
  path: string;
  externalHref?: string;
  subItems?: SubMenuItem[];
}

export const NavbarItems: Record<"en" | "km" | "zh", NavbarItem[]> = {
  en: [
    {
      name: "About Us",
      href: "/about-us",
      path: '/aboutus',
    },
    {
      name: "How it works",
      href: "/how-it-work",
      path: "/howitwork"
    },
    {
      name: "Service",
      href: "/service",
      path: "/service"
    },
    {
      name: "FAQs",
      href: "/faqs",
      path: "/faqs"
    },
  ],
  km: [
    {
      name: "អំពីពួកយើង",
      href: "/about-us",
      path: "/aboutus"
    },
    {
      name: "របៀបដំណើរការ",
      href: "/how-it-work",
      path: "/howitwork"
    },
    {
      name: "សេវាកម្ម",
      href: "/service",
      path: "/service"
    },
    {
      name: "FAQs",
      href: "/about-us",
      path: "/faqs"
    },
  ],
  zh: [
    {
      name: "关于我们",
      href: "/about-us",
      path: "/aboutus"
    },
    {
      name: "工作原理",
      href: "/how-it-work",
      path: "/howitwork"
    },
    {
      name: "我们的服务",
      href: "/service",
      path: "/service"
    },
    {
      name: "FAQs",
      href: "/about-us",
      path: "/faqs"
    },
  ],
};
