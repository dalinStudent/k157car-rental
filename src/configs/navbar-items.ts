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
      href: "/about-us",
      path: ""
    },
    {
      name: "Service",
      href: "/service",
      path: "/service"
    },
    {
      name: "FAQs",
      href: "/faqs",
      path: ""
    },
  ],
  km: [
    {
      name: "អំពីពួកយើង",
      href: "/about-us",
      path: ""
    },
    {
      name: "របៀបដំណើរការ",
      href: "/about-us",
      path: ""
    },
    {
      name: "សេវាកម្ម",
      href: "/service",
      path: ""
    },
    {
      name: "FAQs",
      href: "/about-us",
      path: ""
    },
  ],
  zh: [
    {
      name: "关于我们",
      href: "/about-us",
      path: ""
    },
    {
      name: "工作原理",
      href: "/service",
      path: ""
    },
    {
      name: "我们的服务",
      href: "/about-us",
      path: ""
    },
    {
      name: "FAQs",
      href: "/about-us",
      path: ""
    },
  ],
};
