'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AIContentShowcase } from '../ai-generation/ai-content-showcase';
import { useTranslation } from 'react-i18next';

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="min-h-[90vh] flex items-center bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            className="text-left space-y-8 max-w-xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t('hero.title')}
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t('hero.subtitle')}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" asChild>
                <Link href="/signup">
                  {t('common.tryForFree')} <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#features">
                  {t('common.learnMore')} <ChevronRight className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-[700px] -mt-12"
          >
            <AIContentShowcase />
          </motion.div>
        </div>
      </div>
    </section>
  );
}