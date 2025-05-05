import '../../styles/globals.scss'
import 'animate.css';

import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import React from "react";

import { dmSans, kantumruy, notoSans } from "../fonts";
import { Navbar } from "../components/Navbar";
import { routing } from '@/libs/i18nNavigation';

export const metadata: Metadata = {
  title: "Canadia Bank Website",
  description: "Canadia Bank Website",
};

console.log('Supported locales:', routing.locales);


export default async function RootLayout(props: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await props.params;
  
  if (!routing.locales.includes(locale)) {
    redirect("/en");
  }
  console.log("locale", locale);

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
      <body className="bg-red-500 text-white">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {props.children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
