import { Brands } from "@/app/components/landing/Brand";
import { Filter } from "@/app/components/landing/Filter";
import { IntroductionBlock } from "@/app/components/landing/IntroductionBlock";
import CarsWrapper from "@/app/components/cars/CarWrapper";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/common/types/locale.type";
import { generateMetaTags } from "@/utils/generate-meta-tags.util";

export async function generateMetadata(props: { params: Promise<{ locale: Locale }> }) {
  const params = await props.params; // <-- await here!

  const t = await getTranslations({ locale: params.locale, namespace: "HomePage" });

  return generateMetaTags({
    title: t("title"),
    description: t("description"),
    keywords: [
      "car rental",
      "rent a car",
      "car hire",
      "Phnom Penh car rental",
      "self-drive car Cambodia",
      "car rental with driver",
      "cheap car hire Phnom Penh",
    ].join(", "),
    robots: {
      index: true,
      follow: true,
    },
    image: {
      path: "/images/merchant-portrait.png",
      alt: "Car rental service fleet",
    },
    route: `/${params.locale}/`,
    locale: params.locale,
    siteName: t("k157car_rental_service"),
  });
}


export default function HomePage() {
  return (
    <>
      <div className="mx-auto max-w-[1194px] px-4">
        <IntroductionBlock />
        <Filter />
        <Brands />
      </div>
      <div className="mx-auto max-w-[1700px] px-4">
        <CarsWrapper />
      </div>
    </>
  );
}
