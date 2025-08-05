import { generateSitemap } from '@/components/mdx/utils'
import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.NEXT_PUBLIC_SITE_URL!,
      lastModified: '2025-08-05',
      changeFrequency: 'weekly',
      priority: 0.5,
      images: [
        `${process.env.NEXT_PUBLIC_SITE_URL!}/images/header-image-01.jpg`,
        `${process.env.NEXT_PUBLIC_SITE_URL!}/images/header-image-02.jpg`,
        `${process.env.NEXT_PUBLIC_SITE_URL!}/images/header-image-03.jpg`,
      ],
    },
    ...generateSitemap()
  ]
}