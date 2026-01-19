'use client';

import { useTranslations } from 'next-intl';
import { Badge } from './ui/Badge';
import { motion } from 'framer-motion';

export function Stats() {
  const t = useTranslations('stats');
  const items = t.raw('items') as Array<{ value: string; label: string }>;

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
    <section className="py-28 md:py-44 bg-foreground text-background dot-pattern relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] radial-glow opacity-30 -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: '-60px' }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <div className="text-center">
            <Badge pulsing className="border-accent-secondary/30 bg-accent-secondary/10">
              <span className="text-accent-secondary">{t('label')}</span>
            </Badge>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {items.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center space-y-2"
              >
                <div className="font-display text-4xl md:text-5xl lg:text-6xl text-accent-secondary">
                  {item.value}
                </div>
                <div className="text-background/80 text-sm md:text-base">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
