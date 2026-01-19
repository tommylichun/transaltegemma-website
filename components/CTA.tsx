'use client';

import { useTranslations } from 'next-intl';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

export function CTA() {
  const t = useTranslations('cta');

  return (
    <section className="py-28 md:py-44 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-8 max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-[5.25rem] leading-[1.05] tracking-[-0.02em]">
            {t('title')}{' '}
            <span className="gradient-text">{t('titleGradient')}</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground">
            {t('description')}
          </p>

          <div className="pt-4">
            <Button
              variant="primary"
              showArrow
              className="group text-lg md:text-xl h-14 md:h-16 px-8 md:px-12"
              onClick={() => window.open('https://apps.apple.com/app/translategemma/id6757986827', '_blank')}
            >
              {t('button')}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
