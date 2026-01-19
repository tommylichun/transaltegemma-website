'use client';

import { useTranslations } from 'next-intl';
import { Badge } from './ui/Badge';
import { motion } from 'framer-motion';
import { Lock, MapPin, Gauge, Hand } from 'lucide-react';

const icons = [Lock, MapPin, Gauge, Hand];

export function Benefits() {
  const t = useTranslations('benefits');
  const items = t.raw('items') as Array<{ title: string; description: string }>;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
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
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] radial-glow opacity-30 translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: '-60px' }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <Badge pulsing className="border-accent-secondary/30 bg-accent-secondary/10">
              <span className="text-accent-secondary">{t('label')}</span>
            </Badge>
            <h2 className="font-display text-3xl md:text-[3.25rem] leading-[1.15]">
              {t('title')}{' '}
              <span className="text-accent-secondary">{t('titleGradient')}</span>
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((item, index) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-secondary/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent-secondary" />
                  </div>
                  <h3 className="font-sans text-xl md:text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-background/80 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
