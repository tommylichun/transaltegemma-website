import { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://chunwacreative.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [''];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      const url = locale === 'en' 
        ? `${baseUrl}${route}`
        : `${baseUrl}/${locale}${route}`;
      
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((loc) => [
              loc,
              loc === 'en' ? `${baseUrl}${route}` : `${baseUrl}/${loc}${route}`,
            ])
          ),
        },
      });
    });
  });

  return sitemapEntries;
}
