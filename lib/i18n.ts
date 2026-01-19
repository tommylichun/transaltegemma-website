import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { requestLocale } from 'next-intl/server';

export const locales = ['en', 'zh-Hant', 'zh-Hans', 'ja', 'ko', 'es', 'fr', 'de'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export default getRequestConfig(async () => {
  const locale = await requestLocale();
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
