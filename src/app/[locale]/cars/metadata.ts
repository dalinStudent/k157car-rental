import { Locale } from "@/common/types/locale.type";
import { generateMetaTags } from "@/utils/generate-meta-tags.util";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations({ locale: params.locale, namespace: "service" });

  return generateMetaTags({
    title: t("meta.title"),
    description: t("meta.description"),
    keywords: [
      "popular rental cars",
      "rent a car Phnom Penh",
      "SUV rental Cambodia",
      "cheap car hire",
      "car rental service"
    ].join(", "),
    robots: { index: true, follow: true },
    image: {
      path: "/images/popular-cars.jpg",
      alt: "Popular rental cars fleet",
    },
    route: "/cars",
    locale: params.locale,
    siteName: "K157 Car Rental",
  });
}
