'use client';

import { useTranslations } from 'next-intl';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center py-28 md:py-44 overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] radial-glow opacity-40 -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <h1 className="font-display text-[2.75rem] md:text-5xl lg:text-[5.25rem] leading-[1.05] tracking-[-0.02em] text-foreground">
              {t('title')}{' '}
              <span className="gradient-text gradient-underline relative">
                {t('titleGradient')}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              {t('description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="primary" 
                showArrow 
                className="w-full sm:w-auto group"
                onClick={() => window.open('https://apps.apple.com/app/translategemma/id6757986827', '_blank')}
              >
                {t('ctaPrimary')}
              </Button>
              <Button 
                variant="secondary" 
                className="w-full sm:w-auto"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('ctaSecondary')}
              </Button>
            </div>
          </motion.div>

          {/* Right: Animated Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative h-[600px]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Rotating outer ring */}
              <motion.div
                className="absolute w-96 h-96 border-2 border-dashed border-accent/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              />

              {/* Floating cards */}
              <motion.div
                className="absolute top-20 left-10 w-24 h-32 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-secondary/20 border border-accent/30 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute bottom-20 right-10 w-32 h-24 rounded-2xl bg-gradient-to-br from-accent-secondary/20 to-accent/20 border border-accent/30 shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              />

              {/* Geometric shapes */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-accent to-accent-secondary shadow-accent-lg" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-3xl bg-accent/10 border border-accent/20" />

              {/* Corner accent block */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent rounded-tl-[4rem] shadow-accent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
