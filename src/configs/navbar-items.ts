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
      name: "Service",
    },
    {
      name: "About Us",
      href: "/about-us",
    },
    {
      name: "FAQs",
      href: "/faqs",
    },
  ],
  km: [
    {
      name: "សេវាកម្ម",
    },
    {
      name: "អំពីពួកយើង",
      href: "/about-us",
    },
    {
      name: "FAQs",
      href: "/faqs",
    },
  ],
  zh: [
    {
      name: "សេវាកម្ម",
    },
    {
      name: "អំពីពួកយើង",
      href: "/about-us",
    },
    {
      name: "FAQs",
      href: "/faqs",
    },
  ],
};
