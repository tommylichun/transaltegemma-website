'use client';

import { useTranslations } from 'next-intl';
import { Badge } from './ui/Badge';
import { motion } from 'framer-motion';
import { Camera, Image, ScanLine, Languages, CheckCircle } from 'lucide-react';

const icons = [Camera, Image, ScanLine, Languages, CheckCircle];

export function HowItWorks() {
  const t = useTranslations('howItWorks');
  const steps = t.raw('steps') as Array<{ number: string; title: string; description: string }>;

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
    hidden: { opacity: 0, x: -28 },
    visible: {
      opacity: 1,
      x: 0,
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

          {/* Steps */}
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => {
              const Icon = icons[index % icons.length];
              const isLast = index === steps.length - 1;
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Step Number & Icon */}
                    <div className="flex items-center gap-4 md:w-64 flex-shrink-0">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white font-display text-2xl shadow-accent">
                          {step.number}
                        </div>
                        {!isLast && (
                          <div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-24 gradient-bg mt-2" />
                        )}
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 space-y-2 pt-2">
                      <h3 className="font-sans text-xl md:text-2xl font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed max-w-2xl">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
