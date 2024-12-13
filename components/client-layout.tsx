'use client';

import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n/config';
import { Suspense } from 'react';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <I18nextProvider i18n={i18n} defaultNS="translation">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
        <Toaster />
      </ThemeProvider>
    </I18nextProvider>
  );
}