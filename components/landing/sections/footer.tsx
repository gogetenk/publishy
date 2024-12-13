'use client';

import Link from 'next/link';
import { Bot } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export function Footer() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
  };

  return (
    <footer className="border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="h-6 w-6" />
              <span className="text-xl font-bold">Publishy</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('common.description')}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('footer.product')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#features">{t('common.features')}</Link></li>
              <li><Link href="#pricing">{t('common.pricing')}</Link></li>
              <li><Link href="/docs">{t('footer.documentation')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about">{t('footer.about')}</Link></li>
              <li><Link href="/blog">{t('footer.blog')}</Link></li>
              <li><Link href="/careers">{t('footer.careers')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy">{t('footer.privacy')}</Link></li>
              <li><Link href="/terms">{t('footer.terms')}</Link></li>
              <li>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={toggleLanguage}
                  className="px-0"
                >
                  {i18n.language === 'en' ? '🇫🇷 Français' : '🇬🇧 English'}
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Publishy. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
}