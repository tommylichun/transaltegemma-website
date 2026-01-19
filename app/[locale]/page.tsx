import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Benefits } from '@/components/Benefits';
import { HowItWorks } from '@/components/HowItWorks';
import { Stats } from '@/components/Stats';
import { Testimonials } from '@/components/Testimonials';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with Language Switcher */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between h-16">
            <div className="font-display text-xl font-semibold gradient-text">
              TranslateGemma
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16">
        <Hero />
        <Features />
        <Benefits />
        <HowItWorks />
        <Stats />
        <Testimonials />
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
