'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import { useTranslations } from 'next-intl';

const localeNames: Record<Locale, string> = {
  'en': 'English',
  'zh-Hant': '繁體中文',
  'zh-Hans': '简体中文',
  'ja': '日本語',
  'ko': '한국어',
  'es': 'Español',
  'fr': 'Français',
  'de': 'Deutsch',
};

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('languageSwitcher');

  const handleLocaleChange = (newLocale: Locale) => {
    // Get pathname without locale prefix
    let pathWithoutLocale = pathname;
    locales.forEach((loc) => {
      if (pathname.startsWith(`/${loc}`)) {
        pathWithoutLocale = pathname.replace(`/${loc}`, '') || '/';
      }
    });
    
    // Add new locale
    const newPath = newLocale === 'en' 
      ? pathWithoutLocale || '/'
      : `/${newLocale}${pathWithoutLocale || ''}`;
    
    router.push(newPath);
    router.refresh();
  };

  return (
    <div className="relative group">
      <select
        value={locale}
        onChange={(e) => handleLocaleChange(e.target.value as Locale)}
        className="appearance-none bg-transparent border border-border rounded-lg px-4 py-2 pr-8 text-sm text-foreground hover:border-accent/50 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        aria-label={t('label')}
      >
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {localeNames[loc]}
          </option>
        ))}
      </select>
      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg
          className="w-4 h-4 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
