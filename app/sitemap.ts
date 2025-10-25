import { generateSitemap } from "@/components/mdx/utils";
import { routing } from "@/i18n/routing";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.NEXT_PUBLIC_WEBSITE_URL!,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.5,
      images: [
        `${process.env.NEXT_PUBLIC_WEBSITE_URL!}/images/header-image-01.jpg`,
        `${process.env.NEXT_PUBLIC_WEBSITE_URL!}/images/header-image-02.jpg`,
        `${process.env.NEXT_PUBLIC_WEBSITE_URL!}/images/header-image-03.jpg`,
      ],
    },
    ...routing.locales.map((locale) => ({
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL!}/${locale}/projects.xml`,
      changeFrequency: "weekly",
      lastModified: new Date().toISOString(),
      priority: 0.5,
    } as MetadataRoute.Sitemap[0])),
    ...routing.locales.flatMap((locale) => generateSitemap(locale)),
  ];
}
