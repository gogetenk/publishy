'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          {t('cta.title')}
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t('cta.subtitle')}
        </p>
        <Button size="lg" asChild>
          <Link href="/signup">
            {t('common.tryForFree')} <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
}