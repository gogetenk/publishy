'use client';

import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="fixed bottom-4 right-4 z-50"
    >
      {i18n.language === 'en' ? '🇫🇷 FR' : '🇬🇧 EN'}
    </Button>
  );
}