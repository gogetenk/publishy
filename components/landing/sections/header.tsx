'use client';

import { Button } from '@/components/ui/button';
import { Bot } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Bot className="h-6 w-6" />
          <span className="text-xl font-bold">Publishy</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-muted-foreground hover:text-primary">
            {t('common.features')}
          </Link>
          <Link href="#pricing" className="text-muted-foreground hover:text-primary">
            {t('common.pricing')}
          </Link>
          <Link href="#testimonials" className="text-muted-foreground hover:text-primary">
            {t('common.testimonials')}
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/login">{t('common.signIn')}</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">{t('common.getStarted')}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}