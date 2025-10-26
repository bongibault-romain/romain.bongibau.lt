import "./../css/style.css";

import { routing } from "@/i18n/routing";
import { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Inter, Inter_Tight } from "next/font/google";
import { notFound } from "next/navigation";
import Theme from "../theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const inter_tight = Inter_Tight({
  weight: ["600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE_URL!),
  authors: [
    {
      name: "Romain Bongibault",
      url: "https://romain.bongibau.lt",
    },
  ],
  icons: "/favicon.ico",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noimageindex: false,
    noarchive: true,
  },
  generator: "Unknown",
  alternates: {
    canonical: "/",
    languages: {
      fr: "/",
    },
    types: {
      "application/rss+xml": "/projects.xml",
    },
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      {/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
      <body
        className={`${inter.variable} ${inter_tight.variable} font-inter antialiased bg-gray-50 text-gray-800 dark:bg-gray-950 dark:text-gray-100 tracking-tight`}
      >
        <Theme>
          <NextIntlClientProvider>
            <div className="overflow-hidden supports-[overflow:clip]:overflow-clip">
              <div className="max-w-[728px] mx-auto">
                <div className="w-full bg-white dark:bg-gray-900 border-x border-gray-100 dark:border-gray-800 box-content">
                  <div className="px-3 md:px-16">
                    <div className="flex flex-col min-h-screen">{children}</div>
                  </div>
                </div>
              </div>
            </div>
          </NextIntlClientProvider>
        </Theme>
      </body>
    </html>
  );
}
