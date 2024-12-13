'use client';

import { Bot } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    document.documentElement.lang = lng;
  };

  const languages = [
    { code: 'en', label: '🇬🇧 English' },
    { code: 'fr', label: '🇫🇷 Français' },
    { code: 'es', label: '🇪🇸 Español' },
    { code: 'de', label: '🇩🇪 Deutsch' },
    { code: 'zh', label: '🇨🇳 中文' },
    { code: 'ja', label: '🇯🇵 日本語' },
    { code: 'hi', label: '🇮🇳 हिंदी' },
    { code: 'ar', label: '🇸🇦 العربية' },
    { code: 'it', label: '🇮🇹 Italiano' },
    { code: 'pl', label: '🇵🇱 Polski' },
    { code: 'pt', label: '🇵🇹 Português' },
    { code: 'ru', label: '🇷🇺 Русский' },
  ];

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
                <select
                  value={language}
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="px-2 py-1 text-sm border rounded"
                >
                  {languages.map((lng) => (
                    <option key={lng.code} value={lng.code}>
                      {lng.label}
                    </option>
                  ))}
                </select>
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
