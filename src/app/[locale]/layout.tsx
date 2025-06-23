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
import { WebsiteUrl } from "@/configs";

const siteUrl = "https://nextjs-tailwind-i18n.vercel.app";

const messages = await getMessages();

export const metadata: Metadata = {
  title: messages["title"] || "K157 Car Rental Service",
  description: messages["description"] || "K157 Car Rental Service",
  keywords: [
    "car rental",
    "rent a car",
    "car hire",
    "Phnom Penh car rental",
    "self-drive car Cambodia",
    "car rental with driver",
    "cheap car hire Phnom Penh",
  ].join(", "),
  openGraph: {
    title: messages["title"] || "K157 Car Rental Service",
    description: messages["description"] || "K157 Car Rental Service",
    images: [`${siteUrl}/images/mg-brand.png`],
    url: WebsiteUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: messages["title"] || "K157 Car Rental Service",
    description: messages["description"] || "K157 Car Rental Service",
    images: [`${siteUrl}/images/mg-brand.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: WebsiteUrl,
    languages: {
      en: `${WebsiteUrl}/en`,
      km: `${WebsiteUrl}/km`,
      zh: `${WebsiteUrl}/zh`,
    },
  },
};

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
