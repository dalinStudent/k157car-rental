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

import { dmSans, kantumruy, notoSans } from "@/app/fonts";
import { Navbar } from "@/app/components/Navbar";
import { routing } from "@/libs/i18nNavigation";
import { BackgroundGradientAnimation } from "@/app/components/BackgroundGradientAnimation";
import { Footer } from "@/app/components/Footer";
import { WebsiteUrl } from "@/configs";
import MessageInitializer from "@/app/components/MessageInitializer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const messages = await getMessages();
  const { locale } = await params;
  
  return {
    title: messages["title"] || "K157 Car Rental Service",
    description: messages["description"] || "K157 Car Rental Service",
    openGraph: {
      title: messages["title"] || "K157 Car Rental Service",
      description: messages["description"] || "K157 Car Rental Service",
      url: `${WebsiteUrl}/${locale}`,
      siteName: "K157 Car Rental Service",
      images: [
        {
          url: `${WebsiteUrl}/images/mg-brand.png`,
          width: 1200,
          height: 630,
          alt: "K157 Car Rental Service",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: messages["title"] || "K157 Car Rental Service",
      description: messages["description"] || "K157 Car Rental Service",
      images: [`${WebsiteUrl}/images/mg-brand.png`],
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
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

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
         <MessageInitializer />

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

