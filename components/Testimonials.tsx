'use client';

import { useTranslations } from 'next-intl';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const t = useTranslations('testimonials');
  const items = t.raw('items') as Array<{ quote: string; author: string; location: string }>;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="py-28 md:py-44 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: '-60px' }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <Badge pulsing>{t('label')}</Badge>
            <h2 className="font-display text-3xl md:text-[3.25rem] leading-[1.15]">
              {t('title')}{' '}
              <span className="gradient-text">{t('titleGradient')}</span>
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {items.map((item, index) => {
              const isCenter = index === 1;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={isCenter ? 'md:-translate-y-4' : ''}
                >
                  <Card featured={isCenter} hover>
                    <div className="space-y-6">
                      <Quote className="w-8 h-8 md:w-12 md:h-12 text-accent opacity-20" />
                      <p className="text-foreground leading-relaxed text-base md:text-lg">
                        "{item.quote}"
                      </p>
                      <div className="pt-4 border-t border-border">
                        <div className="font-semibold text-foreground">
                          {item.author}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {item.location}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
