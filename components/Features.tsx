'use client';

import { useTranslations } from 'next-intl';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { motion } from 'framer-motion';
import { 
  Scan, 
  Globe, 
  WifiOff, 
  Shield, 
  Zap, 
  Sparkles 
} from 'lucide-react';

const icons = [Scan, Globe, WifiOff, Shield, Zap, Sparkles];

export function Features() {
  const t = useTranslations('features');
  const items = t.raw('items') as Array<{ title: string; description: string }>;

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
    <section id="features" className="py-28 md:py-44 bg-background">
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

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {items.map((item, index) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card hover>
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white shadow-accent">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-sans text-lg md:text-xl font-semibold text-foreground tracking-[-0.01em]">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
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
