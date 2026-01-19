'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
  const privacyUrl = baseUrl ? `${baseUrl}/../privacy` : '/privacy';
  const supportUrl = baseUrl ? `${baseUrl}/../support` : '/support';

  return (
    <footer className="py-12 md:py-16 border-t border-border bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={privacyUrl}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('links.privacy')}
                </Link>
              </li>
              <li>
                <Link
                  href={supportUrl}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('links.support')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <a
              href={`mailto:${t('contact')}`}
              className="text-muted-foreground hover:text-foreground transition-colors block"
            >
              {t('contact')}
            </a>
          </div>

          {/* Copyright */}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              {t('copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
