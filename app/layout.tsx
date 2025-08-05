import "./css/style.css";

import { Inter, Inter_Tight } from "next/font/google";
import Theme from "./theme-provider";
import { Metadata } from "next";

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
  icons: '/favicon.ico',
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
      fr: "/"
    },
    types: {
      "application/rss+xml": "/projects.xml",
    },
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      {/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
      <body
        className={`${inter.variable} ${inter_tight.variable} font-inter antialiased bg-gray-50 text-gray-800 dark:bg-gray-950 dark:text-gray-100 tracking-tight`}
      >
        <Theme>
          <div className="overflow-hidden supports-[overflow:clip]:overflow-clip">
            <div className="max-w-[728px] mx-auto">
              <div className="w-full bg-white dark:bg-gray-900 border-x border-gray-100 dark:border-gray-800 box-content">
                <div className="px-3 md:px-16">
                  <div className="flex flex-col min-h-screen">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Theme>
      </body>
    </html>
  );
}
