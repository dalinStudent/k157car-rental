// import "@/styles/globals.scss";
// import "animate.css";
// import dayjs from "dayjs";
// import "dayjs/locale/en";
// import localizedFormat from "dayjs/plugin/localizedFormat";
// dayjs.extend(localizedFormat);

// import type { Metadata } from "next";
// import { redirect } from "next/navigation";
// import { NextIntlClientProvider } from "next-intl";
// import { getMessages, setRequestLocale } from "next-intl/server";
// import React from "react";

// import { dmSans, kantumruy, notoSans } from "../fonts";
// import { Navbar } from "../components/Navbar";
// import { routing } from "@/libs/i18nNavigation";
// import { BackgroundGradientAnimation } from "../components/BackgroundGradientAnimation";
// import { Footer } from "@/app/components/Footer";

// const siteUrl = "https://nextjs-tailwind-i18n.vercel.app";

// export async function generateMetadata({
//   params,
// }: {
//   params: { locale: string };
// }): Promise<Metadata> {
//   const messages = await getMessages(params.locale);

//   // Map your locale string to an Open Graph locale (optional)
//   const ogLocaleMap: Record<string, string> = {
//     en: "en_US",
//     km: "km_KH",
//     zh: "zh_CN",
//   };

//   return {
//     title: messages["title"] || "K157 Car Rental Service",
//     description: messages["description"] || "K157 Car Rental Service",
//     openGraph: {
//       title: messages["title"] || "K157 Car Rental Service",
//       description: messages["description"] || "K157 Car Rental Service",
//       url: `${siteUrl}/${params.locale}`,
//       siteName: "K157 Car Rental Service",
//       images: [
//         {
//           url: `${siteUrl}/images/brand-mg.jpg`,
//           width: 1200,
//           height: 630,
//           alt: "K157 Car Rental Service",
//         },
//       ],
//       locale: ogLocaleMap[params.locale] || "en_US",
//       type: "website",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: messages["title"] || "K157 Car Rental Service",
//       description: messages["description"] || "K157 Car Rental Service",
//       images: [`${siteUrl}/images/brand-mg.jpg`],
//     },
//   };
// }

// export default async function RootLayout(props: {
//   children: React.ReactNode;
//   params: Promise<{ locale: string }>;
// }) {
//   const { locale } = await props.params;

//   if (!routing.locales.includes(locale)) {
//     redirect("/en");
//   }

//   setRequestLocale(locale);

//   const messages = await getMessages();

//   return (
//     <html
//       lang={locale}
//       className={
//         locale === "km"
//           ? kantumruy.className
//           : locale === "zh"
//           ? notoSans.className
//           : dmSans.className
//       }
//     >
//       <body className="relative text-white min-h-screen flex flex-col">
//         <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">
//           <BackgroundGradientAnimation />
//           {/* <WavyBackground /> */}
//         </div>

//         <div className="relative z-10 flex-grow">
//           <NextIntlClientProvider messages={messages}>
//             <Navbar />
//             {props.children}
//             <Footer />
//           </NextIntlClientProvider>
//         </div>
//       </body>
//     </html>
//   );
// }

import "@/styles/globals.scss";
import "animate.css";
import dayjs from "dayjs";
import "dayjs/locale/en";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import React from "react";

import { dmSans, kantumruy, notoSans } from "../fonts";
import { Navbar } from "../components/Navbar";
import { routing } from "@/libs/i18nNavigation";
import { BackgroundGradientAnimation } from "../components/BackgroundGradientAnimation";
import { Footer } from "@/app/components/Footer";

const siteUrl = "https://nextjs-tailwind-i18n.vercel.app";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const messages = await getMessages();

  const ogLocaleMap: Record<string, string> = {
    en: "en_US",
    km: "km_KH",
    zh: "zh_CN",
  };

  return {
    title: messages["title"] || "K157 Car Rental Service",
    description: messages["description"] || "K157 Car Rental Service",
    openGraph: {
      title: messages["title"] || "K157 Car Rental Service",
      description: messages["description"] || "K157 Car Rental Service",
      url: `${siteUrl}/${params.locale}`,
      siteName: "K157 Car Rental Service",
      images: [
        {
          url: `${siteUrl}/images/mg-brand.png`,
          width: 1200,
          height: 630,
          alt: "K157 Car Rental Service",
        },
      ],
      locale: ogLocaleMap[params.locale] || "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: messages["title"] || "K157 Car Rental Service",
      description: messages["description"] || "K157 Car Rental Service",
      images: [`${siteUrl}/images/mg-brand.png`],
    },
  };
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = props.params;

  if (!routing.locales.includes(locale)) {
    redirect("/en");
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={
        locale === "km"
          ? kantumruy.className
          : locale === "zh"
          ? notoSans.className
          : dmSans.className
      }
    >
      <body className="relative text-white min-h-screen flex flex-col">
        <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">
          <BackgroundGradientAnimation />
        </div>

        <div className="relative z-10 flex-grow">
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            {props.children}
            <Footer />
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
