import { Metadata } from 'next';
import { locales, type Locale } from './i18n';

// Base URL - will be updated with actual domain
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://chunwacreative.com';

export function generateMetadata(locale: Locale): Metadata {
  const messages = require(`../messages/${locale}.json`);
  const meta = messages.meta;

  const url = locale === 'en' ? baseUrl : `${baseUrl}/${locale}`;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: 'Chun Wa Creative', url: 'https://chunwacreative.com' }],
    creator: 'Chun Wa Creative',
    publisher: 'Chun Wa Creative',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
      languages: {
        'en': baseUrl,
        'zh-Hant': `${baseUrl}/zh-Hant`,
        'zh-Hans': `${baseUrl}/zh-Hans`,
        'ja': `${baseUrl}/ja`,
        'ko': `${baseUrl}/ko`,
        'es': `${baseUrl}/es`,
        'fr': `${baseUrl}/fr`,
        'de': `${baseUrl}/de`,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'zh-Hant' ? 'zh_TW' : locale === 'zh-Hans' ? 'zh_CN' : locale,
      url: url,
      title: meta.title,
      description: meta.description,
      siteName: 'TranslateGemma',
      images: [
        {
          url: '/icon-1024.png',
          width: 1024,
          height: 1024,
          alt: 'TranslateGemma App Icon',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/icon-1024.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      // Add Google Search Console verification when available
      // google: 'your-verification-code',
    },
  };
}

export function generateStructuredData(locale: Locale) {
  const messages = require(`../messages/${locale}.json`);
  const meta = messages.meta;
  
  // App Store URL - update when app is published
  const appStoreUrl = 'https://apps.apple.com/app/translategemma/id6757986827';

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'TranslateGemma',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'iOS',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      ratingCount: '0',
    },
    description: meta.description,
    screenshot: `${baseUrl}/icon-1024.png`,
    image: `${baseUrl}/icon-1024.png`,
    url: appStoreUrl,
    downloadUrl: appStoreUrl,
    softwareVersion: '1.0',
    releaseNotes: 'Initial release - Offline image translation with AI',
    author: {
      '@type': 'Organization',
      name: 'Chun Wa Creative',
      url: 'https://chunwacreative.com',
    },
    inLanguage: locale,
  };
}
