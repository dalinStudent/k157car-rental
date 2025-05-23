import "@/styles/globals.scss";
import "animate.css";

import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import React from "react";

import { dmSans, kantumruy, notoSans } from "../fonts";
import { Navbar } from "../components/Navbar";
import { routing } from "@/libs/i18nNavigation";
import { BackgroundGradientAnimation } from "../components/BackgroundGradientAnimation";

export const metadata: Metadata = {
  title: "eCommerce Website",
  description: "Look Then Buy",
};

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
      <body className="relative text-white">
        <div className="absolute inset-0 z-0">
          <BackgroundGradientAnimation />
        </div>

        <div className="relative z-10">
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            {props.children}
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}