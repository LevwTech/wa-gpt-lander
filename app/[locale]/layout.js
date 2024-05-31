import "../globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
  title: "WhatsApp AI",
  description:
    "Chat, Create Stickers & Images, Send Voice Notes, Files, and More!",
  icons: {
    icon: [
      {
        url: "/logo.png",
      },
    ],
  },
};

export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages();

  return (
    <html className="overflow-hidden" lang={locale}>
      <body className={locale === "ar" ? "ar-font" : "en-font"}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
      <GoogleTagManager gtmId="AW-16471613152" />
    </html>
  );
}
