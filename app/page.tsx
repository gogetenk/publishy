'use client';

import { FeatureUniqueContent } from '@/components/landing/ai-generation/feature-unique-content';
import { FeatureSection } from '@/components/landing/feature-section';
import { AnalyticsVisual, ProjectsVisual } from '@/components/landing/feature-visuals';
import { CTASection } from '@/components/landing/sections/cta-section';
import { AutomationSection } from '@/components/landing/sections/features/automation-section';
import { Footer } from '@/components/landing/sections/footer';
import { Header } from '@/components/landing/sections/header';
import { HeroSection } from '@/components/landing/sections/hero-section';
import { PricingSection } from '@/components/landing/sections/pricing-section';
import { SocialProofSection } from '@/components/landing/sections/social-proof-section';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <SocialProofSection />

        <div id="features">
          <AutomationSection />
          
          <FeatureSection
            headline={t('features.management.title')}
            description={t('features.management.description')}
            visual={<ProjectsVisual />}
            reversed={true}
          />
          
          <FeatureSection
            headline={t('features.content.title')}
            description={t('features.content.description')}
            visual={<FeatureUniqueContent />}
          />

          <FeatureSection
            headline={t('features.analytics.title')}
            description={t('features.analytics.description')}
            visual={<AnalyticsVisual />}
            reversed={true}
          />
        </div>

        <PricingSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}